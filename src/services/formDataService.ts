import http from "../api-formspree";

class FormDataService {
  sendData(data: any) {
    return http.post("", data);
  }
}

export default new FormDataService();
