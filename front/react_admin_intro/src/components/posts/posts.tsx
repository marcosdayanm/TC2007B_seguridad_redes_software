import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  required,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

type Props = {};

export const PostList = (props: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <List>
      {isSmallScreen && (
        <SimpleList
          //   primaryText={(record) => record.userId.name}
          primaryText={(record) => record.id}
          secondaryText={(record) => record.title}
          tertiaryText={(record) => record.body}
        />
      )}
      {!isSmallScreen && (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" validate={[required()]} />
        <TextInput source="body" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

export const PostCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" validate={[required()]} />
        <TextInput source="body" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
