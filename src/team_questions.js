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

const QuestionFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="question" alwaysOn />
  </Filter>
);

export const QuestionList = (props) => (
  <List {...props} filters={<QuestionFilter />}>
    <Datagrid>
      <TextField source="question" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const QuestionShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="question" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const QuestionCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="question" />
    </SimpleForm>
  </Create>
);

export const QuestionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="question" />
      
    </SimpleForm>
  </Edit>
);
