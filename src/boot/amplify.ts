import { boot } from "quasar/wrappers";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

import AmplifyVue from "@aws-amplify/ui-vue";

Amplify.configure(outputs);

export default boot(({ app }) => {
  app.use(AmplifyVue);
});
