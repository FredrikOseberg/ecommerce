import { OpenAPIV3 } from 'openapi-types';

export interface JsonSchemaProps {
  $id: string;
  components: object;
  [key: string]: any;
}

// Omits keys from json schema that will cause errors in openapi
export const removeJsonSchemaProps = <T extends JsonSchemaProps>(
  schema: T
): OpenAPIV3.SchemaObject => {
  return omitKeys(schema, '$id', 'components');
};

const omitKeys = (obj: { [key: string]: any }, ...keys: string[]) => {
  const copy = { ...obj };
  for (const key of keys) {
    delete copy[key];
  }
  return copy;
};

export const mapValues = <T extends object, U>(
  object: T,
  fn: (value: T[keyof T]) => U
): Record<keyof T, U> => {
  const entries = Object.entries(object).map(([key, value]) => [
    key,
    fn(value),
  ]);

  return Object.fromEntries(entries);
};

export const createResponseSchema = (
  schemaName: string
): OpenAPIV3.ResponseObject => {
  return {
    description: schemaName,
    content: {
      'application/json': {
        schema: {
          $ref: `#/components/schemas/${schemaName}`,
        },
      },
    },
  };
};

export const createRequestSchema = (
  schemaName: string
): OpenAPIV3.RequestBodyObject => {
  return {
    description: schemaName,
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: `#/components/schemas/${schemaName}`,
        },
      },
    },
  };
};
