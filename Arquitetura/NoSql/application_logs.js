db.createCollection("application_logs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "timestamp",
        "request_id",
        "method",
        "path",
        "status_code",
        "duration_ms"
      ],
      properties: {
        timestamp: {
          bsonType: "date"
        },

        request_id: {
          bsonType: "string"
        },

        trace_id: {
          bsonType: "string"
        },

        method: {
          bsonType: "string"
        },

        path: {
          bsonType: "string"
        },

        status_code: {
          bsonType: "int"
        },

        duration_ms: {
          bsonType: "int"
        },

        user: {
          bsonType: "object",
          required: ["id"],
          properties: {
            id: {
              bsonType: "string"
            },
            created_at: {
              bsonType: "date"
            }
          }
        },

        external_api: {
          bsonType: "object",
          required: [
            "context",
            "method",
            "timestamp"
          ],
          properties: {
            context: {
              bsonType: "string"
            },

            method: {
              bsonType: "string"
            },

            timestamp: {
              bsonType: "date"
            },

            request_id: {
              bsonType: "string"
            },

            trace_id: {
              bsonType: "string"
            }
          }
        },

        error: {
          bsonType: "object",
          properties: {
            type: {
              bsonType: "string"
            },

            code: {
              bsonType: "string"
            },

            message: {
              bsonType: "string"
            },

            retriable: {
              bsonType: "bool"
            }
          }
        }
      }
    }
  }
});

db.application_logs.createIndex({ timestamp: -1 });

db.application_logs.createIndex({ request_id: 1 });

db.application_logs.createIndex({ trace_id: 1 });

db.application_logs.createIndex({ "user.id": 1 });

db.application_logs.createIndex({ "external_api.context": 1 });

db.application_logs.createIndex({ "error.code": 1 });

db.application_logs.createIndex({ status_code: 1 });