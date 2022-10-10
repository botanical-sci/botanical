export interface MenuModel {
  title: string;
  type: "COLLECTION" | "PAGE";
  resourceId: string;
  items: MenuModel[]
}
