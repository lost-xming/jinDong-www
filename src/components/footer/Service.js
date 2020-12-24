import { GET, POST } from "@/axios";
import CommonService from "@/store/CommonService";
import { apiUrl } from "@/config/index";
class Service extends CommonService {
	getData(params) {
		return GET(`${apiUrl}/footer`, params);
	}
}

export default new Service();
