---
title: antd 4.0 封装通用form组件
date: 2021-03-08 17:37:25
tags:
- Antd
categories:
- "React"
isShowComments: false
---

<Boxx/>

[[toc]]

前言
--

[编辑展示效果](https://codesandbox.io/s/serene-pascal-vi5x9)

项目中有较多的表单进行编写时,使用antd的表单总是要写很多个相同的FormItem,表单过多时,代码的篇幅过于沉余和繁杂,不利于后期维护,所以对于一般简单的表单进行封装,来达到通过数据渲染表单的效果,改变维护Dom到维护数据的转变。
+ 依赖库版本:
   - antd  4.13
   - moment  2.29.1

## 0.工具类方法
```javascript
const setObjDefaultValue = (obj, value = null) => {
  return new Proxy(obj, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : value;
    }
  });
};

// 进行类型判断
const is = {
  types: [
    "Array",
    "Boolean",
    "Date",
    "Number",
    "Object",
    "Function",
    "RegExp",
    "String",
    "Window",
    "HTMLDocument"
  ]
};
// eslint-disable-next-line array-callback-return
is.types.map((item) => {
  is[item] = (function (type) {
    return function (obj) {
      return Object.prototype.toString.call(obj) === `[object ${type}]`;
    };
  })(item);
});

const callFun = (result) => {
  is.Function(result) ? result() : null;
};

export { is, callFun, setObjDefaultValue };


```
## 1.封装表单项

```javascript
import React, { Component } from "react";
import {
  Cascader,
  Input,
  TreeSelect,
  InputNumber,
  Transfer,
  Slider,
  Switch,
  Button,
  Radio,
  Rate,
  Select,
  Checkbox,
  DatePicker,
  Col,
  Row,
  TimePicker,
  Upload,
  Icon,
  message,
  Tag,
  Tooltip
} from "antd";
import { is, setObjDefaultValue } from "../utils";
import PropTypes from "prop-types";

const { Option, OptGroup } = Select;
const { TreeNode } = TreeSelect;
const { Dragger } = Upload;
const { Group: RadioGroup } = Radio;
const { Group: CheckboxGroup } = Checkbox;
const { TextArea, Group: InputGroup, Password: InputPassword } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class SingleFormItem extends Component {
  constructor(props) {
    super(props);
    this.UploadButtonRef = React.createRef(null);
  }

  onEventChange = (event) => {
    this.setValue(event.target.value);
  };

  onValueChange = (value) => {
    this.setValue(value);
  };

  onDateChange = (date, dateString) => {
    this.setValue(dateString);
  };

  setValue = (value) => {
    const { onChange } = this.props;
    onChange(value);
  };

  onButtonClick = (obj) => {
    const { text, buttonClick } = this.props;
    buttonClick(text, obj);
  };

  render() {
    const {
      type = "",
      mixin = {},
      text,
      manualSubmit,
      tooltipMixin
    } = this.props;
    let { onEventChange: onChange } = this;
    if (
      [
        "Checkbox",
        "Select",
        "InputNumber",
        "Slider",
        "Switch",
        "Rate",
        "Cascader",
        "TreeSelect",
        "Button"
      ].includes(type)
    ) {
      onChange = this.onValueChange;
    } else if (
      ["MonthPicker", "RangePicker", "WeekPicker", "DatePicker"].includes(type)
    ) {
      onChange = this.onDateChange;
    }
    let mixinObj = {
      onChange,
      ...mixin
    };
    const getRadio = () => {
      const { radios = [] } = mixinObj;
      delete mixinObj.radios;
      const radioItems = radios.map((item) => {
        const { value, label } = item;
        return (
          <Radio key={value} value={value}>
            {label}
          </Radio>
        );
      });
      return <Radio.Group {...mixinObj}>{radioItems} </Radio.Group>;
    };
    const getSelect = () => {
      const { options = [], next } = mixinObj;
      delete mixinObj.options;
      let optionItems = options.map((item) => {
        const { value, label } = item;
        return (
          <Option key={value} value={value}>
            {label}
          </Option>
        );
      });
      if (next) {
        optionItems = options.map((item) => {
          const { value, label } = item;
          const children = item[next];
          return (
            <OptGroup key={value} label={label}>
              {children.map((item) => {
                const { value, label } = item;
                return (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                );
              })}
            </OptGroup>
          );
        });
      }
      return (
        <Select {...mixinObj} allowClear>
          {optionItems}
        </Select>
      );
    };

    const getTags = () => {
      let { text: texts = [] } = this.props;
      const main = texts.map((item) => {
        const { name } = item;
        return <Tag key={name}>{name.toUpperCase()}</Tag>;
      });
      return <>{main}</>;
    };

    const getUpload = () => {
      const UploadClick = () => {
        const { uploadButtonClick } = this.props;
        const flag = uploadButtonClick();
        if (flag) {
          console.log(flag);
          this.UploadButtonRef.current.click();
        }
      };
      return (
        <>
          <Button onClick={UploadClick}>{text}</Button>
          <Upload
            {...mixinObj}
            onChange={(info) => {
              const { status } = info.file;
              if (status !== "uploading") {
                console.log(info.file, info.fileList);
              }
              if (status === "done") {
                message.success(
                  `${info.file.name} file uploaded successfully.`
                );
                this.onButtonClick(info);
              } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
              }
            }}
          >
            <Button ref={this.UploadButtonRef}></Button>
          </Upload>
        </>
      );
    };
    let itemTypeObjs = {
      Text: (
        <Tooltip placement="topRight" {...tooltipMixin} title={text}>
          <span>{text}</span>
        </Tooltip>
      ),
      Input: <Input {...mixinObj} />,
      InputPassword: <InputPassword {...mixinObj} />,
      TextArea: <TextArea allowClear {...mixinObj} />,
      InputNumber: <InputNumber {...mixinObj} />,
      Slider: <Slider {...mixinObj} />,
      Switch: <Switch {...mixinObj} />,
      Rate: <Rate {...mixinObj} />,
      Tag: getTags,
      Cascader: <Cascader {...mixinObj} />,
      DatePicker: <DatePicker {...mixinObj} />,
      MonthPicker: <MonthPicker {...mixinObj} />,
      RangePicker: <RangePicker {...mixinObj} />,
      WeekPicker: <WeekPicker {...mixinObj} />,
      TimePicker: <TimePicker {...mixinObj} />,
      Checkbox: <CheckboxGroup {...mixinObj} />,
      Submit: () => {
        const { label = "提交" } = mixinObj;
        return (
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e) => {
              e.preventDefault();
              manualSubmit();
            }}
            {...mixinObj}
          >
            {label}{" "}
          </Button>
        );
      },
      Upload: getUpload,
      Button: (
        <Button
          type="primary"
          onClick={(e) => {
            this.onButtonClick();
          }}
          {...mixinObj}
        >
          {text}{" "}
        </Button>
      ),
      Dragger: () => {
        const onDraggerChange = (info) => {
          const { status } = info.file;
          if (status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        };
        mixinObj.onChange = onDraggerChange;
        return (
          <Dragger {...mixinObj}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
          </Dragger>
        );
      },
      InputGroup: () => {
        return (
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
        );
      },
      Select: getSelect,
      Radio: getRadio,
      Transfer: <Transfer {...mixinObj} />,
      TreeSelect: () => {
        const {
          idKey = "key",
          titleKey = "title",
          childrenKey = "children",
          treeData = []
        } = mixinObj;

        const renderTreeNodes = (data) =>
          data.map((item) => {
            if (item[childrenKey]) {
              return (
                <TreeNode key={item[idKey]} title={item[titleKey]}>
                  {renderTreeNodes(item[childrenKey])}
                </TreeNode>
              );
            }
            return <TreeNode key={item[idKey]} title={item[titleKey]} />;
          });
        return (
          <TreeSelect treeDefaultExpandAll showSearch {...mixinObj}>
            {renderTreeNodes(treeData)}
          </TreeSelect>
        );
      }
    };
    itemTypeObjs = setObjDefaultValue(itemTypeObjs, null);
    const result = itemTypeObjs[type];
    /* if(Radio){

      } */
    return is.Function(result) ? result() : result;
  }
}

SingleFormItem.propTypes = {
  /**
   * name
   */
  type: PropTypes.string,
  /**
   * 点击提交按钮时调用
   */
  mixin: PropTypes.object,
  /**
   * 每次改变数据或者 按钮点击时调用
   */
  value: PropTypes.string,
  /**
   * 改变表单项内容时调用
   */
  onChange: PropTypes.func,
  /**
   * 按钮点击时调用
   */
  buttonClick: PropTypes.func,
  /**
   * 按钮点击时调用
   */
  uploadButtonClick: PropTypes.func
};

SingleFormItem.defaultProps = {
  type: "",
  mixin: {},
  value: "",
  onChange: () => {},
  buttonClick: () => {},
  uploadButtonClick: () => {
    return true;
  }
};

export default SingleFormItem;
```

## 2.封装表单组件 

```javascript

import { Form } from "antd";
import React, { useImperativeHandle, forwardRef, useEffect } from "react";
import SingleFormItem from "./singleFormItem";
import { is } from "../utils";

const Index = (
  {
    formData,
    submit,
    buttonClick,
    setFieldsValue,
    uploadButtonClick,
    resetFormData,
    ifSetDefaultValue
  },
  ref
) => {
  const [form] = Form.useForm();

  const onGenderChange = (nameKey, value) => {
    form.setFieldsValue({ nameKey: value });
    is.Function(setFieldsValue) && setFieldsValue(nameKey, value);
  };

  const setFormDefaultValue = () => {
    const currentObj = form.getFieldsValue();
    const tempValue = {};
    formData.items.map((obj) => {
      const { item, mixin = {} } = obj;
      const { name } = item;
      if (!currentObj[name] && mixin.defaultValue) {
        tempValue[name] = mixin.defaultValue;
      }
    });
    form.setFieldsValue(tempValue);
  };

  useEffect(() => {
    setFormDefaultValue();
    return () => {};
  }, []);

  useEffect(() => {
    setFormDefaultValue();
  });

  const onSubmit = (values) => {
    if (ifSetDefaultValue) {
      formData.items.map((obj) => {
        const { item, mixin = {} } = obj;
        const { name } = item;
        if (!values[name] && values[name] !== 0) {
          values[name] = mixin.defaultValue;
        }
      });
    }
    console.log(values);
    submit(values);
  };

  const manualSubmit = () => {
    form.submit();
  };

  useImperativeHandle(ref, () => {
    return {
      getForm() {
        return form;
      },
      getItemsValue() {
        return form.getFieldsValue();
      },
      resetItemsValue() {
        form.resetFields(formData.items.map((item) => item.item.name));
        resetFormData && resetFormData();
      },
      updateSetValue() {
        setFormDefaultValue();
      }
    };
  });

  const { form: formObj, items } = formData;
  const FromItems = items.map((singleItem) => {
    const {
      item,
      type,
      mixin = {},
      value,
      config = {},
      tooltipMixin = {}
    } = singleItem;
    const { name } = item;
    const { Br = false } = config;
    const BrDom = Br ? <br /> : null;
    return (
      <>
        <Form.Item key={name} {...item} className={`from_item_${name}`}>
          <SingleFormItem
            mixin={mixin}
            type={type}
            text={value}
            config={config}
            TooltipMixin={tooltipMixin}
            manualSubmit={manualSubmit}
            buttonClick={(text, obj) => {
              buttonClick && buttonClick(text, obj);
            }}
            uploadButtonClick={uploadButtonClick}
            onChange={(value) => {
              onGenderChange(name, value);
            }}
          />
        </Form.Item>
        {BrDom}
      </>
    );
  });
  return (
    <Form
      form={form}
      {...formObj}
      className={"base_antd_form"}
      onFinish={onSubmit}
    >
      {FromItems}
    </Form>
  );
};

// Index.propTypes = {
//   /**
//    *  展示的表单数据
//    */
//   formData: PropTypes.object,
//     /**
//    * 点击提交按钮时调用
//    */
//   submit: PropTypes.func,
//     /**
//    * 每次改变数据或者 按钮点击时调用
//    */
//   update: PropTypes.func,
//     /**
//    * 每次改变数据或者 按钮点击时调用
//    */
//   setFieldsValue: PropTypes.func,
//    /**
//    *  点击上传按钮的时候调用,用来判断能否弹出选择文件的框,不设置就是默认弹出
//    */
//   uploadButtonClick: PropTypes.func,
//   /**
//    *  是否要在提交的时候是否进行将没有设置值的内容设置成默认值
//    */
//   ifSetDefaultValue: PropTypes.bool,
// };

// Index.defaultProps = {
//   formData: {},
//   submit: () => {},
//   update: () => {},
//   setFieldsValue: () => {},
//   uploadButtonClick: () => {return true},
//   ifSetDefaultValue:true
// };

export default forwardRef(Index);

```

## 3.需要渲染表格的数据
```javascript
import moment from "moment";
const today = moment();
function disabledDate(current) {
  return current && current < moment().subtract(1, "days");
}
const defaultFormDefaultLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 }
  }
};

const formNextLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};

// 没有名称只有右侧的数据的布局
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 18,
      offset: 6
    }
  }
};

const tableFormData = {
  form: {
    name: "test",
    ...defaultFormDefaultLayout
  },
  items: [
    {
      item: {
        label: "Input",
        name: "Input",
        rules: [{ required: true, message: "请输入您的元数据名称" }]
      },
      type: "Input",
      mixin: {
        placeholder: "请输入",
        defaultValue: "Input"
      }
    },
    {
      item: {
        label: "Text",
        name: "Text"
      },
      type: "Text",
      value: "showText",
      tooltipMixin: {
        placement: "bottomRight"
      }
    },
    {
      item: {
        label: "InputPassword",
        name: "InputPassword",
        rules: [{ required: true, message: "不能为空" }]
      },
      type: "InputPassword",
      mixin: {
        placeholder: "请输入"
      }
    },
    {
      item: {
        label: "InputNumber",
        name: "InputNumber"
      },
      type: "InputNumber",
      mixin: {
        placeholder: "请输入"
      }
    },
    {
      item: {
        label: "TextArea",
        name: "TextArea"
      },
      type: "TextArea",
      mixin: {
        placeholder: "请输入",
        rows: 4
      }
    },
    {
      item: {
        label: "Slider",
        name: "Slider"
      },
      type: "Slider",
      mixin: {
        min: 1,
        max: 20,
        value: 10
      }
    },
    {
      item: {
        label: "Switch",
        name: "Switch"
      },
      type: "Switch",
      mixin: {
        defaultChecked: false,
        checkedChildren: "开启"
      }
    },
    {
      item: {
        label: "Rate",
        name: "Rate"
      },
      type: "Rate",
      mixin: {
        defaultValue: 2.5
      }
    },
    {
      item: {
        label: "Tag",
        name: "Tag"
      },
      type: "Tag",
      value: [{ name: "tag1" }, { name: "tag2" }]
    },
    {
      item: {
        label: "Cascader",
        name: "Cascader"
      },
      type: "Cascader",
      mixin: {
        options: [
          {
            value: "zhejiang",
            label: "Zhejiang",
            children: [
              {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                  {
                    value: "xihu",
                    label: "West Lake"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      item: {
        label: "DatePicker",
        name: "DatePicker"
      },
      type: "DatePicker",
      mixin: {
        defaultValue: moment(today),
        disabledDate: disabledDate
      }
    },
    {
      item: {
        label: "MonthPicker",
        name: "MonthPicker"
      },
      type: "MonthPicker",
      mixin: {
        defaultValue: moment(today)
      }
    },
    {
      item: {
        label: "RangePicker",
        name: "RangePicker"
      },
      type: "RangePicker",
      mixin: {
        defaultValue: moment(today),
        disabledDate: disabledDate
      }
    },
    {
      item: {
        label: "WeekPicker",
        name: "WeekPicker"
      },
      type: "WeekPicker",
      mixin: {
        defaultValue: moment(today)
      }
    },
    {
      item: {
        label: "TimePicker",
        name: "TimePicker"
      },
      type: "TimePicker",
      mixin: {
        defaultValue: moment(today)
      }
    },
    {
      item: {
        label: "Checkbox",
        name: "Checkbox"
      },
      type: "Checkbox",
      mixin: {
        options: [
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" }
        ],
        defaultValue: "Apple"
      }
    },
    {
      item: {
        label: "Radio",
        name: "Radio"
      },
      type: "Radio",
      mixin: {
        options: [
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" }
        ],
        defaultValue: "Apple"
      }
    },
    {
      item: {
        label: "Transfer",
        name: "Transfer"
      },
      type: "Transfer",
      mixin: {}
    },
    {
      item: {
        label: "TreeSelect",
        name: "TreeSelect"
      },
      type: "TreeSelect",
      mixin: {
        idKey: "key",
        titleKey: "title",
        childrenKey: "children",
        treeData: [
          {
            key: "001",
            title: "001",
            children: [
              {
                key: "001001",
                title: "001001"
              },
              {
                key: "001002",
                title: "001002"
              }
            ]
          },
          {
            key: "002",
            title: "002",
            children: [
              {
                key: "002001",
                title: "002001"
              },
              {
                key: "002002",
                title: "002002"
              }
            ]
          }
        ]
      }
    },
    {
      item: {
        label: "Select",
        name: "Select"
      },
      type: "Select",
      mixin: {
        options: [
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" }
        ],
        defaultValue: "Apple"
      }
    },
    {
      item: {
        label: "SelectNext",
        name: "SelectNext"
      },
      type: "Select",
      mixin: {
        options: [
          {
            label: "Apple",
            value: "Apple",
            childer: [
              {
                label: "Apple1",
                value: "Apple1"
              },
              {
                label: "Apple2",
                value: "Apple2"
              }
            ]
          },
          {
            label: "Pear",
            value: "Pear",
            childer: [
              {
                label: "Pear1",
                value: "Pear1"
              }
            ]
          },
          {
            label: "Orange",
            value: "Orange",
            childer: [
              {
                label: "Orange1",
                value: "Orange1"
              }
            ]
          }
        ],
        next: "childer",
        defaultValue: "Apple1"
      }
    },
    {
      item: {
        label: "Upload",
        name: "Upload"
      },
      type: "Upload",
      value: "上传文件",
      mixin: {
        name: "files",
        action: "action"
      }
    },
    {
      item: {
        name: "button",
        ...tailFormItemLayout
      },
      type: "Button",
      value: "自定义按钮"
    },
    {
      item: {
        label: "",
        name: "Submit",
        ...tailFormItemLayout
      },
      type: "Submit",
      mixin: {
        label: "提交按钮"
      }
    }
  ]
};

export { tableFormData };

```

## 3.通过数据渲染表单组件

```javascript
import "./styles.css";
import "./index.less";
import AntdForm from "./AntdForm";
import "antd/dist/antd.css";
import { tableFormData } from "./Data/tempData";
export default function App() {
  return (
    <div className="App">
      <h1>数据生成表单</h1>
      <AntdForm formData={tableFormData} />
    </div>
  );
}
```