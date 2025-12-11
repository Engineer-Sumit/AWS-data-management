import json
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("studentData")

def lambda_handler(event, context):
    try:
        body = json.loads(event["body"])

        studentid = body.get("studentid")

        if not studentid:
            return error("Student ID is required")

        table.delete_item(Key={"studentid": studentid})

        return success("Student deleted successfully")

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
