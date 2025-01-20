/*
 	在使用 create-react-app 生成的 TypeScript 项目模板中，react-app-env.d.ts 文件的作用是为 React 应用中的全局变量和类型进行声明。

	全局类型声明：react-app-env.d.ts 文件会引入 react-scripts 提供的全局类型定义，这些类型定义扩展了 TypeScript 编译器对 React 项目的支持，使得项目能够识别和使用 React 的一些特有全局变量。

	声明 JSX 环境：该文件确保 TypeScript 了解当前项目的 JSX 运行环境，并为 .tsx 文件提供正确的类型检查和代码补全。这样，项目中的 .tsx 文件能够顺利地使用 JSX 语法而不出现类型报错。

	声明静态资源类型：默认情况下，TypeScript 对导入的静态资源（例如图片、CSS 文件等）并没有类型支持。react-app-env.d.ts 文件包含静态资源的类型声明，允许项目中直接导入这些资源，例如 import logo from './logo.svg';，使 TypeScript 识别这些资源为特定类型（如 string）。

	react-app-env.d.ts文件通过三斜杠命令（/// <reference types="react-scripts" />）声明了对react-scripts库的依赖，确保项目编译时能够正确处理这些资源‌

 */



/// <reference types="react-scripts" />
