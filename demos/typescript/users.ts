import { 
  VayprSchema,
  Schema,
  String
} from '../../src';

@Schema({
  graphql: false
})
export class Users extends VayprSchema<Users> {
  @String
  foo: string;
}

const user = new Users();

user.validator.isValid({ foo: 1 }).then(foo => console.log(foo))
  .catch(err => console.log('err', err));

