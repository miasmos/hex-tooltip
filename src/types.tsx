import { AddonModel } from "@moonswelle/deadbydaylight";

type AuthorModel = Pick<AddonModel, "index" | "name" | "description" | "flavor" | "image">;

export { AuthorModel };
