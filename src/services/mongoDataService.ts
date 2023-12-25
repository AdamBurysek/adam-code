import http from "../api-mongo.ts";

class MongoDataService {
  getProjects() {
    return http.get("/projects");
  }
}

export default new MongoDataService();
