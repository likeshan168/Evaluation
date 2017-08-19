namespace hr.Administration {

    @Serenity.Decorators.registerEditor()
    export class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        //export class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.RadioButtonEditor, any> {

        private searchText: string;

        constructor(div: JQuery) {
            super(div);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();

            Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, (field, text) => {
                this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                this.view.setItems(this.view.getItems(), true);
            });
        }

        protected getButtons() {
            return [];
        }
        //TODO: 通过这种方式限制一个用户对应一个角色有点勉强，应该是将checkbox 改成radiocheck
        protected itemSelectedChanged(item: Serenity.CheckTreeItem<any>): void {
            let items = this.view.getItems();

            let selectedItems = items.filter(p => p.isSelected);
            if (selectedItems.length >= 2) {
                Q.alert("一个用户只能选择一个角色");
                item.isSelected = false;
                return;
            }
        }

        protected getTreeItems() {
            return RoleRow.getLookup().items.map(role => <Serenity.CheckTreeItem<any>>{
                id: role.RoleId.toString(),
                text: role.RoleName
            });
        }

        protected onViewFilter(item) {
            return super.onViewFilter(item) &&
                (Q.isEmptyOrNull(this.searchText) ||
                    Select2.util.stripDiacritics(item.text || '')
                        .toUpperCase().indexOf(this.searchText) >= 0);
        }
    }
}