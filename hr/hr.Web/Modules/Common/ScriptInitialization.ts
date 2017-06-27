/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace hr.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('hr');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}