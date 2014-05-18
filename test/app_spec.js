var express=require("../");
 var request=require("supertest");

 var app=express();
 
 describe("app",function(){
 
 	describe("implements a empty server",function(){
 
 		it("should respond with 404",function(done){
 
 			request(app)
 				.get("/foo")
 				.expect(404,done);
 		})
 
 		it("#listen",function(done){
 
 			app.listen(7000);
 
 			request("http://localhost:7000")
 				.get("/foo")
 				.expect(404,done);
 		})
 
 	})
})