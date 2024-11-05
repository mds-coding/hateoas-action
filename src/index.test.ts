import { HateoasField } from "@mds-coding/hateoas-field";
import { HateoasAction } from "./index.js";

test("`HateoasAction` can be created", () => {
  const action = new HateoasAction("/session", "POST", "Connect", [
    new HateoasField("Login", "login", "text", true),
    new HateoasField("Password", "password", "password", true),
  ]);
  expect(action).toBeDefined();
  expect(action.path).toBe("/session");
  expect(action.method).toBe("POST");
  expect(action.label).toBe("Connect");
  expect(action.fields.length).toBe(2);
});
