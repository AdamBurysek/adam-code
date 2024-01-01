import { createFormspreeApi } from "../api";

const formspreeApi = createFormspreeApi();

class FormDataService {
  sendData(data: any) {
    return formspreeApi.post("", data);
  }
}

export default new FormDataService();
