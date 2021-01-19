// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const SettingsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search key" source="settings_key" alwaysOn />
    <TextInput label="Search value" source="settings_value" alwaysOn />
  </Filter>
);

export const SettingsList = (props) => (
  <List {...props} filters={<SettingsFilter />}>
    <Datagrid>
      <TextField source="settings_key" />
      <RichTextField source="settings_value" />
      <ShowButton label="" />
      <EditButton label="" />
      {/* <DeleteButton label="" redirect={false}/> */}
    </Datagrid>
  </List>
);

export const SettingsShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="settings_key" />
      <RichTextField source="settings_value" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const SettingsCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="settings_key" />
      <TextInput source="settings_value" />
      
    </SimpleForm>
  </Create>
);

export const SettingsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="settings_value" />
      {/* <RichTextInput source="settings_value" /> */}
    </SimpleForm>
  </Edit>
);
