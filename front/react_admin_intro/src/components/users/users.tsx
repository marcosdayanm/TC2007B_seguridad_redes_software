import {
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleList,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  Create,
  required,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

type Props = {};

export const UserList = (props: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <List>
      {isSmallScreen && (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.phone}
        />
      )}
      {!isSmallScreen && (
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="phone" />
          <TextField source="website" />
          <TextField source="address.street" label="Street" />
          <TextField source="address.city" label="City" />
          <TextField source="address.zipcode" label="Zip Code" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const UserCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} />
        <TextInput source="name" validate={[required()]} />
        <TextInput source="email" validate={[required()]} />
        <TextInput source="phone" validate={[required()]} />
        <TextInput source="website" />
        <TextInput
          source="address.street"
          label="Street"
          validate={[required()]}
        />
        <TextInput source="address.city" label="City" validate={[required()]} />
        <TextInput
          source="address.zipcode"
          label="Zip Code"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};

export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <TextInput source="name" validate={[required()]} />
        <TextInput source="email" validate={[required()]} />
        <TextInput source="phone" validate={[required()]} />
        <TextInput source="website" />
        <TextInput
          source="address.street"
          label="Street"
          validate={[required()]}
        />
        <TextInput source="address.city" label="City" validate={[required()]} />
        <TextInput
          source="address.zipcode"
          label="Zip Code"
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
};
