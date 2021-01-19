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

const ChallengesFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="question" alwaysOn />
  </Filter>
);

export const ChallengesList = (props) => (
  <List {...props} filters={<ChallengesFilter />}>
    <Datagrid>
      <TextField source="question" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const ChallengesShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="question" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const ChallengesCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="question" />
    </SimpleForm>
  </Create>
);

export const ChallengesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="question" />
      
    </SimpleForm>
  </Edit>
);
