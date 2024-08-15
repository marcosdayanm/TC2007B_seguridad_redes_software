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

export const CommentList = (props: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <List>
      {isSmallScreen && (
        <SimpleList
          //   primaryText={(record) => record.userId.name}
          primaryText={(record) => record.id}
          secondaryText={(record) => record.name}
          tertiaryText={(record) => record.body}
        />
      )}
      {!isSmallScreen && (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="postId" reference="posts">
            <TextField source="title" />
          </ReferenceField>
          <TextField source="email" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const CommentEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="postId" reference="posts" />
        <TextInput source="name" validate={[required()]} />
        <TextInput source="email" validate={[required()]} />
        <TextInput source="body" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

export const CommentCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} />
        <ReferenceInput source="postId" reference="posts" />
        <TextInput source="name" validate={[required()]} />
        <TextInput source="email" validate={[required()]} />
        <TextInput source="body" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
