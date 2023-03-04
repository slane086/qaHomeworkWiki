import {Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver"
const chromedriver = require ("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
import { emManager } from "./POM";
const employeePage = new emManager(driver);
