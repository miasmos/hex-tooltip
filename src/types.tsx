import { AddonModel } from "@stephenpoole/deadbydaylight";

type AuthorModel = Pick<AddonModel, "index" | "name" | "description" | "flavor" | "image">;

export { AuthorModel };
