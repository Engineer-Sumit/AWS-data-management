import json
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("studentData")

def lambda_handler(event, context):
    try:
        body = json.loads(event["body"])
        
        studentid = body.get("studentid")
        name = body.get("name")
        student_class = body.get("class")
        age = body.get("age")

        if not studentid:
            return error("Student ID required")

        # Update
        table.update_item(
            Key={"studentid": studentid},
            UpdateExpression="set #n=:n, #c=:c, age=:a",
            ExpressionAttributeNames={
                "#n": "name",
                "#c": "class"
            },
            ExpressionAttributeValues={
                ":n": name,
                ":c": student_class,
                ":a": int(age)
            }
        )

        return success("Student updated successfully")

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
