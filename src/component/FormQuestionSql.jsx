import React from "react";
import PropTypes from "prop-types";
import { Input, Form, Button } from "antd";

export const FormQuestionSql = ({ fun }) => {
  const [form] = Form.useForm();
  const TextArea = Input.TextArea;
  const handleQuery = (values) => {
    console.log(values["Question"]);
    fun(values["Question"]);
    form.resetFields();
  };
  return (
    <Form
      name="question"
      // wrapperCol={{ span: 16 }}
      style={{ Width: 1000 }}
      layout="inline"
      form={form}
      onFinish={handleQuery}
      align="bottom"
    >
      <Form.Item name="Question" style={{ width: 400 }}>
        <TextArea
          placeholder="Su pregunta"
          rows={6}
          bordered
          className="bg-gray-900 text-gray-200 border-gray-500 "
        />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="border-gray-500 bg-gray-900"
      >
        Enviar Pregunta
      </Button>
    </Form>
  );
};

FormQuestionSql.propTypes = {
  fun: PropTypes.func,
};
