import { classes } from "@automapper/classes";
import { createMapper, addProfile } from "@automapper/core";

import { UserProfile } from "../../modules/users/mapper";

const mapper = createMapper({ strategyInitializer: classes() });

addProfile(mapper, UserProfile);

export { mapper };
