import type { Route } from "../common/interfaces/route.interface";
import { DefaultLayout } from "../layouts/default.layout";
import { ErrorPage } from "../pages/error/error.page";
import { NotFoundPage } from "../pages/not-found/not-found.page";
import { PAGE } from "./route.constant";

export const routes: Route[] = [
  { ...PAGE.NOT_FOUND, element: NotFoundPage, layout: DefaultLayout },
  { ...PAGE.ERROR, element: ErrorPage, layout: DefaultLayout },
];
