import { createApp, registerElement } from 'nativescript-vue';
import Home from './components/Home.vue';
import {initialize} from "@nativescript-community/ui-image"

//do this before creating any image view
initialize({ isDownsampleEnabled: true });

registerElement('Img', () => require("@nativescript-community/ui-image").Img);

createApp(Home).start();
