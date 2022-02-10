import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
        <TextInput label="tgder" source="tgder" />
      </SimpleForm>
    </Edit>
  );
};
