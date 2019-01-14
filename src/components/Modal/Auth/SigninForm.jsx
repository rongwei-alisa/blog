import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import styles from './SigninForm.less';

const { Item } = Form;

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    this.props.form.validateFields();
  };

  componentDidMount = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form>
        {/* 用户名 */}
        <Item
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input prefix={<Icon type="user" />} placeholder="用户名" />
          )}
        </Item>
        {/* 密码 */}
        <Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
          )}
        </Item>
        {/* 登录 */}
        <Item>
          <Button
            type="primary"
            disabled={hasErrors(getFieldsError())}
            block
          >
            登录
          </Button>
          <div className={styles.assistOpt}>
            <span>没有账号？注册</span>
            <span>忘记密码</span>
          </div>
        </Item>
      </Form>
    );
  }
}

export default Form.create()(SigninForm);