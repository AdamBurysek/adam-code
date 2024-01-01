import { createMongoDBApi } from "../api";

const mongoDBApi = createMongoDBApi();

class MongoDataService {
  getProjects() {
    return mongoDBApi.get("/projects");
  }
}

export default new MongoDataService();
