import json
import boto3
import time

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("studentData")

def lambda_handler(event, context):
    try:
        body = json.loads(event["body"])

        student_id = body.get("studentid")
        name = body.get("name")
        student_class = body.get("class")
        age = body.get("age")

        if not student_id or not name or not student_class or not age:
            return error("All fields are required")

        table.put_item(Item={
            "studentid": student_id,
            "name": name,
            "class": student_class,
            "age": int(age),
            "created_at": int(time.time())
        })

        return success("Student added successfully")

    except Exception as e:
        return error(str(e), 500)


def success(msg):
    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"message": msg})
    }

def error(msg, code=400):
    return {
        "statusCode": code,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"error": msg})
    }
