import { createFormspreeApi } from "../api";
import { FormValues } from "../interfaces/global";

const formspreeApi = createFormspreeApi();

class FormDataService {
  sendData(data: FormValues) {
    return formspreeApi.post("", data);
  }
}

export default new FormDataService();
