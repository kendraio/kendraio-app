import { FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyTemplateOptions } from "@ngx-formly/core";

export class Field {
  public static field(
    type: string,
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return {
      type,
      key,
      templateOptions,
      ...options,
    };
  }

  public static input(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return this.field("input", key, templateOptions, options);
  }

  public static email(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    const defaults = {
      type: "email",
      label: "Email",
    };

    return this.input(key, { ...templateOptions, ...defaults }, options);
  }

  public static password(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    const defaults = {
      type: "password",
      minLength: 8,
      required: true,
      // {hideExpression: 'model.password'}
    };
    return this.input(key, { ...templateOptions, ...defaults }, options);
  }

  public static select(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return this.field("select", key, templateOptions, options);
  }

  public static textarea(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return this.field("textarea", key, templateOptions, options);
  }

  public static radio(
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return this.field("radio", key, templateOptions, options);
  }
}
