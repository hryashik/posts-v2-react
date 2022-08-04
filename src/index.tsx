import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import './app.scss'
import { Provider } from "react-redux";
import store from "./redux/store";

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<Provider store={store}>
		<App/>
	</Provider>
)


