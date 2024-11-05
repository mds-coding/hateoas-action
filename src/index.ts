import { HateoasField } from "@mds-coding/hateoas-field";

export class HateoasAction {
  path: string;
  method: string;
  label: string;
  fields: HateoasField[];


  constructor(
    path: string,
    method: string,
    label: string,
    fields: HateoasField[]
  ) {
    this.path = path;
    this.method = method;
    this.label = label;
    this.fields = fields;
  }
}

