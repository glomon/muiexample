// resources/dogQuery.data;.ts
import { createDataProvider } from "@mui/toolpad/server";
var dogQuery_data_default = createDataProvider({
  async getRecords({ paginationModel: { start, pageSize } }) {
    return {
      records: []
    };
  }
});
export {
  dogQuery_data_default as default
};
