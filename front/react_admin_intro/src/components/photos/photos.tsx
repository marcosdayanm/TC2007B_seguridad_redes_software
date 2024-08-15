import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  ImageField,
  List,
  ReferenceField,
  ReferenceInput,
  required,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

type Props = {};

export const PhotoList = (props: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <List>
      {isSmallScreen && (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => record.url}
          tertiaryText={(record) => record.id}
        />
      )}
      {!isSmallScreen && (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="albumId" reference="albums">
            <TextField source="title" />
          </ReferenceField>
          <ImageField source="url" />
          <UrlField source="thumbnailUrl" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const PhotoEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="albumId" reference="albums" />
        <TextInput source="title" validate={[required()]} />
        <TextInput source="url" validate={[required()]} />
        <TextInput source="thumbnailUrl" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};

export const PhotoCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} />
        <ReferenceInput source="albumId" reference="albums" />
        <TextInput source="title" validate={[required()]} />
        <TextInput source="url" validate={[required()]} />
        <TextInput source="thumbnailUrl" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
