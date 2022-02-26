import Mock from "mockjs";

Mock.mock(
    "/api/users",
    "get",
    () => {
        return Mock.mock({
            "status": 200,
            "msg": "请求成功",
            "data|3": [{
                name: "@cname",
                age: "@integer(20,50)"
            }]
        })
    }
)