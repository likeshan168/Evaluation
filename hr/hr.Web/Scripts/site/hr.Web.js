var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['DepartmentId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'BatchUpdate', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'RoleId', 'RoleName', 'DepartmentId', 'DepartmentName', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'BatchUpdate', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var CompanyEvaluationArchiveForm = (function (_super) {
            __extends(CompanyEvaluationArchiveForm, _super);
            function CompanyEvaluationArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CompanyEvaluationArchiveForm;
        }(Serenity.PrefixedContext));
        CompanyEvaluationArchiveForm.formKey = 'Archive.CompanyEvaluationArchive';
        Archive.CompanyEvaluationArchiveForm = CompanyEvaluationArchiveForm;
        [['ExamTitle', function () { return Serenity.StringEditor; }], ['UserName', function () { return Serenity.StringEditor; }], ['InputContent', function () { return Serenity.StringEditor; }], ['DepartmentName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CompanyEvaluationArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var CompanyEvaluationArchiveRow;
        (function (CompanyEvaluationArchiveRow) {
            CompanyEvaluationArchiveRow.idProperty = 'Id';
            CompanyEvaluationArchiveRow.nameProperty = 'ExamTitle';
            CompanyEvaluationArchiveRow.localTextPrefix = 'Archive.CompanyEvaluationArchive';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyEvaluationArchiveRow.Fields || (CompanyEvaluationArchiveRow.Fields = {}));
            ['Id', 'ExamTitle', 'UserName', 'InputContent', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(CompanyEvaluationArchiveRow = Archive.CompanyEvaluationArchiveRow || (Archive.CompanyEvaluationArchiveRow = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var CompanyEvaluationArchiveService;
        (function (CompanyEvaluationArchiveService) {
            CompanyEvaluationArchiveService.baseUrl = 'Archive/CompanyEvaluationArchive';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyEvaluationArchiveService.Methods || (CompanyEvaluationArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CompanyEvaluationArchiveService[x] = function (r, s, o) { return Q.serviceRequest(CompanyEvaluationArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CompanyEvaluationArchiveService.baseUrl + '/' + x;
            });
        })(CompanyEvaluationArchiveService = Archive.CompanyEvaluationArchiveService || (Archive.CompanyEvaluationArchiveService = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var EvaluationFinalResultArchiveForm = (function (_super) {
            __extends(EvaluationFinalResultArchiveForm, _super);
            function EvaluationFinalResultArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EvaluationFinalResultArchiveForm;
        }(Serenity.PrefixedContext));
        EvaluationFinalResultArchiveForm.formKey = 'Archive.EvaluationFinalResultArchive';
        Archive.EvaluationFinalResultArchiveForm = EvaluationFinalResultArchiveForm;
        [['ExamTitle', function () { return Serenity.StringEditor; }], ['UserName', function () { return Serenity.StringEditor; }], ['TotalScore', function () { return Serenity.IntegerEditor; }], ['Grade', function () { return Serenity.StringEditor; }], ['DepartmentName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EvaluationFinalResultArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var EvaluationFinalResultArchiveRow;
        (function (EvaluationFinalResultArchiveRow) {
            EvaluationFinalResultArchiveRow.idProperty = 'Id';
            EvaluationFinalResultArchiveRow.nameProperty = 'ExamTitle';
            EvaluationFinalResultArchiveRow.localTextPrefix = 'Archive.EvaluationFinalResultArchive';
            var Fields;
            (function (Fields) {
            })(Fields = EvaluationFinalResultArchiveRow.Fields || (EvaluationFinalResultArchiveRow.Fields = {}));
            ['Id', 'ExamTitle', 'UserName', 'TotalScore', 'Grade', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(EvaluationFinalResultArchiveRow = Archive.EvaluationFinalResultArchiveRow || (Archive.EvaluationFinalResultArchiveRow = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var EvaluationFinalResultArchiveService;
        (function (EvaluationFinalResultArchiveService) {
            EvaluationFinalResultArchiveService.baseUrl = 'Archive/EvaluationFinalResultArchive';
            var Methods;
            (function (Methods) {
            })(Methods = EvaluationFinalResultArchiveService.Methods || (EvaluationFinalResultArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EvaluationFinalResultArchiveService[x] = function (r, s, o) { return Q.serviceRequest(EvaluationFinalResultArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EvaluationFinalResultArchiveService.baseUrl + '/' + x;
            });
        })(EvaluationFinalResultArchiveService = Archive.EvaluationFinalResultArchiveService || (Archive.EvaluationFinalResultArchiveService = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var EvaluationFinalResultDetailArchiveForm = (function (_super) {
            __extends(EvaluationFinalResultDetailArchiveForm, _super);
            function EvaluationFinalResultDetailArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EvaluationFinalResultDetailArchiveForm;
        }(Serenity.PrefixedContext));
        EvaluationFinalResultDetailArchiveForm.formKey = 'Archive.EvaluationFinalResultDetailArchive';
        Archive.EvaluationFinalResultDetailArchiveForm = EvaluationFinalResultDetailArchiveForm;
        [['ExamTitle', function () { return Serenity.StringEditor; }], ['UserName', function () { return Serenity.StringEditor; }], ['Score', function () { return Serenity.IntegerEditor; }], ['EvaluationUserName', function () { return Serenity.StringEditor; }], ['DepartmentName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EvaluationFinalResultDetailArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var EvaluationFinalResultDetailArchiveRow;
        (function (EvaluationFinalResultDetailArchiveRow) {
            EvaluationFinalResultDetailArchiveRow.idProperty = 'Id';
            EvaluationFinalResultDetailArchiveRow.nameProperty = 'ExamTitle';
            EvaluationFinalResultDetailArchiveRow.localTextPrefix = 'Archive.EvaluationFinalResultDetailArchive';
            var Fields;
            (function (Fields) {
            })(Fields = EvaluationFinalResultDetailArchiveRow.Fields || (EvaluationFinalResultDetailArchiveRow.Fields = {}));
            ['Id', 'ExamTitle', 'UserName', 'Score', 'EvaluationUserName', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(EvaluationFinalResultDetailArchiveRow = Archive.EvaluationFinalResultDetailArchiveRow || (Archive.EvaluationFinalResultDetailArchiveRow = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var EvaluationFinalResultDetailArchiveService;
        (function (EvaluationFinalResultDetailArchiveService) {
            EvaluationFinalResultDetailArchiveService.baseUrl = 'Archive/EvaluationFinalResultDetailArchive';
            var Methods;
            (function (Methods) {
            })(Methods = EvaluationFinalResultDetailArchiveService.Methods || (EvaluationFinalResultDetailArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EvaluationFinalResultDetailArchiveService[x] = function (r, s, o) { return Q.serviceRequest(EvaluationFinalResultDetailArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EvaluationFinalResultDetailArchiveService.baseUrl + '/' + x;
            });
        })(EvaluationFinalResultDetailArchiveService = Archive.EvaluationFinalResultDetailArchiveService || (Archive.EvaluationFinalResultDetailArchiveService = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var ExamArchiveForm = (function (_super) {
            __extends(ExamArchiveForm, _super);
            function ExamArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ExamArchiveForm;
        }(Serenity.PrefixedContext));
        ExamArchiveForm.formKey = 'Archive.ExamArchive';
        Archive.ExamArchiveForm = ExamArchiveForm;
        [['ExamId', function () { return Serenity.IntegerEditor; }], ['ExamTitle', function () { return Serenity.StringEditor; }], ['FirstKpiName', function () { return Serenity.StringEditor; }], ['SecondKpiName', function () { return Serenity.StringEditor; }], ['Content', function () { return Serenity.StringEditor; }], ['ContentType', function () { return Serenity.IntegerEditor; }], ['Score', function () { return Serenity.IntegerEditor; }], ['Mark', function () { return Serenity.StringEditor; }], ['Remark', function () { return Serenity.StringEditor; }], ['EvaluationType', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ExamArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var ExamArchiveRow;
        (function (ExamArchiveRow) {
            ExamArchiveRow.idProperty = 'Id';
            ExamArchiveRow.nameProperty = 'ExamTitle';
            ExamArchiveRow.localTextPrefix = 'Archive.ExamArchive';
            var Fields;
            (function (Fields) {
            })(Fields = ExamArchiveRow.Fields || (ExamArchiveRow.Fields = {}));
            ['Id', 'ExamId', 'ExamTitle', 'FirstKpiName', 'SecondKpiName', 'Content', 'ContentType', 'Score', 'Mark', 'Remark', 'EvaluationType'].forEach(function (x) { return Fields[x] = x; });
        })(ExamArchiveRow = Archive.ExamArchiveRow || (Archive.ExamArchiveRow = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var ExamArchiveService;
        (function (ExamArchiveService) {
            ExamArchiveService.baseUrl = 'Archive/ExamArchive';
            var Methods;
            (function (Methods) {
            })(Methods = ExamArchiveService.Methods || (ExamArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'GetExamArchiveList', 'GetSelfEvaluation', 'GetEvaluation1', 'GetEvaluation2'].forEach(function (x) {
                ExamArchiveService[x] = function (r, s, o) { return Q.serviceRequest(ExamArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ExamArchiveService.baseUrl + '/' + x;
            });
        })(ExamArchiveService = Archive.ExamArchiveService || (Archive.ExamArchiveService = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var SelfEvaluationResultArchiveForm = (function (_super) {
            __extends(SelfEvaluationResultArchiveForm, _super);
            function SelfEvaluationResultArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelfEvaluationResultArchiveForm;
        }(Serenity.PrefixedContext));
        SelfEvaluationResultArchiveForm.formKey = 'Archive.SelfEvaluationResultArchive';
        Archive.SelfEvaluationResultArchiveForm = SelfEvaluationResultArchiveForm;
        [['ExamTitle', function () { return Serenity.StringEditor; }], ['UserName', function () { return Serenity.StringEditor; }], ['ExamContent', function () { return Serenity.StringEditor; }], ['InputContent', function () { return Serenity.StringEditor; }], ['DepartmentName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SelfEvaluationResultArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var SelfEvaluationResultArchiveRow;
        (function (SelfEvaluationResultArchiveRow) {
            SelfEvaluationResultArchiveRow.idProperty = 'Id';
            SelfEvaluationResultArchiveRow.nameProperty = 'ExamTitle';
            SelfEvaluationResultArchiveRow.localTextPrefix = 'Archive.SelfEvaluationResultArchive';
            var Fields;
            (function (Fields) {
            })(Fields = SelfEvaluationResultArchiveRow.Fields || (SelfEvaluationResultArchiveRow.Fields = {}));
            ['Id', 'ExamTitle', 'UserName', 'ExamContent', 'InputContent', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(SelfEvaluationResultArchiveRow = Archive.SelfEvaluationResultArchiveRow || (Archive.SelfEvaluationResultArchiveRow = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var SelfEvaluationResultArchiveService;
        (function (SelfEvaluationResultArchiveService) {
            SelfEvaluationResultArchiveService.baseUrl = 'Archive/SelfEvaluationResultArchive';
            var Methods;
            (function (Methods) {
            })(Methods = SelfEvaluationResultArchiveService.Methods || (SelfEvaluationResultArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SelfEvaluationResultArchiveService[x] = function (r, s, o) { return Q.serviceRequest(SelfEvaluationResultArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SelfEvaluationResultArchiveService.baseUrl + '/' + x;
            });
        })(SelfEvaluationResultArchiveService = Archive.SelfEvaluationResultArchiveService || (Archive.SelfEvaluationResultArchiveService = {}));
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var CompanyEvaluationArchiveForm = (function (_super) {
            __extends(CompanyEvaluationArchiveForm, _super);
            function CompanyEvaluationArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CompanyEvaluationArchiveForm;
        }(Serenity.PrefixedContext));
        CompanyEvaluationArchiveForm.formKey = 'Default.CompanyEvaluationArchive';
        Default.CompanyEvaluationArchiveForm = CompanyEvaluationArchiveForm;
        [['ExamTitle', function () { return Serenity.StringEditor; }], ['UserName', function () { return Serenity.StringEditor; }], ['InputContent', function () { return Serenity.StringEditor; }], ['DepartmentName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CompanyEvaluationArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var CompanyEvaluationArchiveRow;
        (function (CompanyEvaluationArchiveRow) {
            CompanyEvaluationArchiveRow.idProperty = 'Id';
            CompanyEvaluationArchiveRow.nameProperty = 'ExamTitle';
            CompanyEvaluationArchiveRow.localTextPrefix = 'Default.CompanyEvaluationArchive';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyEvaluationArchiveRow.Fields || (CompanyEvaluationArchiveRow.Fields = {}));
            ['Id', 'ExamTitle', 'UserName', 'InputContent', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(CompanyEvaluationArchiveRow = Default.CompanyEvaluationArchiveRow || (Default.CompanyEvaluationArchiveRow = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var CompanyEvaluationArchiveService;
        (function (CompanyEvaluationArchiveService) {
            CompanyEvaluationArchiveService.baseUrl = 'Default/CompanyEvaluationArchive';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyEvaluationArchiveService.Methods || (CompanyEvaluationArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CompanyEvaluationArchiveService[x] = function (r, s, o) { return Q.serviceRequest(CompanyEvaluationArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CompanyEvaluationArchiveService.baseUrl + '/' + x;
            });
        })(CompanyEvaluationArchiveService = Default.CompanyEvaluationArchiveService || (Default.CompanyEvaluationArchiveService = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var EvaluationFinalResultArchiveForm = (function (_super) {
            __extends(EvaluationFinalResultArchiveForm, _super);
            function EvaluationFinalResultArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EvaluationFinalResultArchiveForm;
        }(Serenity.PrefixedContext));
        EvaluationFinalResultArchiveForm.formKey = 'Default.EvaluationFinalResultArchive';
        Default.EvaluationFinalResultArchiveForm = EvaluationFinalResultArchiveForm;
        [['ExamTitle', function () { return Serenity.StringEditor; }], ['UserName', function () { return Serenity.StringEditor; }], ['TotalScore', function () { return Serenity.IntegerEditor; }], ['Grade', function () { return Serenity.StringEditor; }], ['DepartmentName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EvaluationFinalResultArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var EvaluationFinalResultArchiveRow;
        (function (EvaluationFinalResultArchiveRow) {
            EvaluationFinalResultArchiveRow.idProperty = 'Id';
            EvaluationFinalResultArchiveRow.nameProperty = 'ExamTitle';
            EvaluationFinalResultArchiveRow.localTextPrefix = 'Default.EvaluationFinalResultArchive';
            var Fields;
            (function (Fields) {
            })(Fields = EvaluationFinalResultArchiveRow.Fields || (EvaluationFinalResultArchiveRow.Fields = {}));
            ['Id', 'ExamTitle', 'UserName', 'TotalScore', 'Grade', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(EvaluationFinalResultArchiveRow = Default.EvaluationFinalResultArchiveRow || (Default.EvaluationFinalResultArchiveRow = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var EvaluationFinalResultArchiveService;
        (function (EvaluationFinalResultArchiveService) {
            EvaluationFinalResultArchiveService.baseUrl = 'Default/EvaluationFinalResultArchive';
            var Methods;
            (function (Methods) {
            })(Methods = EvaluationFinalResultArchiveService.Methods || (EvaluationFinalResultArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EvaluationFinalResultArchiveService[x] = function (r, s, o) { return Q.serviceRequest(EvaluationFinalResultArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EvaluationFinalResultArchiveService.baseUrl + '/' + x;
            });
        })(EvaluationFinalResultArchiveService = Default.EvaluationFinalResultArchiveService || (Default.EvaluationFinalResultArchiveService = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var EvaluationFinalResultDetailArchiveForm = (function (_super) {
            __extends(EvaluationFinalResultDetailArchiveForm, _super);
            function EvaluationFinalResultDetailArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EvaluationFinalResultDetailArchiveForm;
        }(Serenity.PrefixedContext));
        EvaluationFinalResultDetailArchiveForm.formKey = 'Default.EvaluationFinalResultDetailArchive';
        Default.EvaluationFinalResultDetailArchiveForm = EvaluationFinalResultDetailArchiveForm;
        [['ExamTitle', function () { return Serenity.StringEditor; }], ['UserName', function () { return Serenity.StringEditor; }], ['Score', function () { return Serenity.IntegerEditor; }], ['EvaluationUserName', function () { return Serenity.StringEditor; }], ['DepartmentName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EvaluationFinalResultDetailArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var EvaluationFinalResultDetailArchiveRow;
        (function (EvaluationFinalResultDetailArchiveRow) {
            EvaluationFinalResultDetailArchiveRow.idProperty = 'Id';
            EvaluationFinalResultDetailArchiveRow.nameProperty = 'ExamTitle';
            EvaluationFinalResultDetailArchiveRow.localTextPrefix = 'Default.EvaluationFinalResultDetailArchive';
            var Fields;
            (function (Fields) {
            })(Fields = EvaluationFinalResultDetailArchiveRow.Fields || (EvaluationFinalResultDetailArchiveRow.Fields = {}));
            ['Id', 'ExamTitle', 'UserName', 'Score', 'EvaluationUserName', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(EvaluationFinalResultDetailArchiveRow = Default.EvaluationFinalResultDetailArchiveRow || (Default.EvaluationFinalResultDetailArchiveRow = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var EvaluationFinalResultDetailArchiveService;
        (function (EvaluationFinalResultDetailArchiveService) {
            EvaluationFinalResultDetailArchiveService.baseUrl = 'Default/EvaluationFinalResultDetailArchive';
            var Methods;
            (function (Methods) {
            })(Methods = EvaluationFinalResultDetailArchiveService.Methods || (EvaluationFinalResultDetailArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EvaluationFinalResultDetailArchiveService[x] = function (r, s, o) { return Q.serviceRequest(EvaluationFinalResultDetailArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EvaluationFinalResultDetailArchiveService.baseUrl + '/' + x;
            });
        })(EvaluationFinalResultDetailArchiveService = Default.EvaluationFinalResultDetailArchiveService || (Default.EvaluationFinalResultDetailArchiveService = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var SelfEvaluationResultArchiveForm = (function (_super) {
            __extends(SelfEvaluationResultArchiveForm, _super);
            function SelfEvaluationResultArchiveForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelfEvaluationResultArchiveForm;
        }(Serenity.PrefixedContext));
        SelfEvaluationResultArchiveForm.formKey = 'Default.SelfEvaluationResultArchive';
        Default.SelfEvaluationResultArchiveForm = SelfEvaluationResultArchiveForm;
        [['ExamTitle', function () { return Serenity.StringEditor; }], ['UserName', function () { return Serenity.StringEditor; }], ['ExamContent', function () { return Serenity.StringEditor; }], ['InputContent', function () { return Serenity.StringEditor; }], ['DepartmentName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SelfEvaluationResultArchiveForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var SelfEvaluationResultArchiveRow;
        (function (SelfEvaluationResultArchiveRow) {
            SelfEvaluationResultArchiveRow.idProperty = 'Id';
            SelfEvaluationResultArchiveRow.nameProperty = 'ExamTitle';
            SelfEvaluationResultArchiveRow.localTextPrefix = 'Default.SelfEvaluationResultArchive';
            var Fields;
            (function (Fields) {
            })(Fields = SelfEvaluationResultArchiveRow.Fields || (SelfEvaluationResultArchiveRow.Fields = {}));
            ['Id', 'ExamTitle', 'UserName', 'ExamContent', 'InputContent', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(SelfEvaluationResultArchiveRow = Default.SelfEvaluationResultArchiveRow || (Default.SelfEvaluationResultArchiveRow = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var SelfEvaluationResultArchiveService;
        (function (SelfEvaluationResultArchiveService) {
            SelfEvaluationResultArchiveService.baseUrl = 'Default/SelfEvaluationResultArchive';
            var Methods;
            (function (Methods) {
            })(Methods = SelfEvaluationResultArchiveService.Methods || (SelfEvaluationResultArchiveService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SelfEvaluationResultArchiveService[x] = function (r, s, o) { return Q.serviceRequest(SelfEvaluationResultArchiveService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SelfEvaluationResultArchiveService.baseUrl + '/' + x;
            });
        })(SelfEvaluationResultArchiveService = Default.SelfEvaluationResultArchiveService || (Default.SelfEvaluationResultArchiveService = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var TodoListViewForm = (function (_super) {
            __extends(TodoListViewForm, _super);
            function TodoListViewForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TodoListViewForm;
        }(Serenity.PrefixedContext));
        TodoListViewForm.formKey = 'Default.TodoListView';
        Default.TodoListViewForm = TodoListViewForm;
        [['Id', function () { return Serenity.IntegerEditor; }], ['Username', function () { return Serenity.StringEditor; }], ['Url', function () { return Serenity.StringEditor; }], ['StartDate', function () { return Serenity.DateEditor; }], ['EndDate', function () { return Serenity.DateEditor; }], ['Title', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TodoListViewForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var TodoListViewRow;
        (function (TodoListViewRow) {
            TodoListViewRow.nameProperty = 'Username';
            TodoListViewRow.localTextPrefix = 'Default.TodoListView';
            var Fields;
            (function (Fields) {
            })(Fields = TodoListViewRow.Fields || (TodoListViewRow.Fields = {}));
            ['Id', 'Username', 'Url', 'StartDate', 'EndDate', 'Title'].forEach(function (x) { return Fields[x] = x; });
        })(TodoListViewRow = Default.TodoListViewRow || (Default.TodoListViewRow = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Default;
    (function (Default) {
        var TodoListViewService;
        (function (TodoListViewService) {
            TodoListViewService.baseUrl = 'Default/TodoListView';
            var Methods;
            (function (Methods) {
            })(Methods = TodoListViewService.Methods || (TodoListViewService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TodoListViewService[x] = function (r, s, o) { return Q.serviceRequest(TodoListViewService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TodoListViewService.baseUrl + '/' + x;
            });
        })(TodoListViewService = Default.TodoListViewService || (Default.TodoListViewService = {}));
    })(Default = hr.Default || (hr.Default = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var CompanyEvaluationRow;
        (function (CompanyEvaluationRow) {
            CompanyEvaluationRow.idProperty = 'CompanyEvaluationId';
            CompanyEvaluationRow.localTextPrefix = 'Evaluation.CompanyEvaluation';
            var Fields;
            (function (Fields) {
            })(Fields = CompanyEvaluationRow.Fields || (CompanyEvaluationRow.Fields = {}));
            ['CompanyEvaluationId', 'UserId', 'ExamId', 'EvaluationContent', 'Username', 'UserEmail', 'Title', 'DepartmentId', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(CompanyEvaluationRow = Evaluation.CompanyEvaluationRow || (Evaluation.CompanyEvaluationRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var CompanyEvaluationService;
        (function (CompanyEvaluationService) {
            CompanyEvaluationService.baseUrl = 'Evaluation/CompanyEvaluation';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyEvaluationService.Methods || (CompanyEvaluationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'GetEvaluation', 'AddCompanyEvaluation'].forEach(function (x) {
                CompanyEvaluationService[x] = function (r, s, o) { return Q.serviceRequest(CompanyEvaluationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CompanyEvaluationService.baseUrl + '/' + x;
            });
        })(CompanyEvaluationService = Evaluation.CompanyEvaluationService || (Evaluation.CompanyEvaluationService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ContentType;
        (function (ContentType) {
            ContentType[ContentType["Input"] = 1] = "Input";
            ContentType[ContentType["Radio"] = 2] = "Radio";
            ContentType[ContentType["Multi"] = 3] = "Multi";
            ContentType[ContentType["Fill"] = 4] = "Fill";
        })(ContentType = Evaluation.ContentType || (Evaluation.ContentType = {}));
        Serenity.Decorators.registerEnum(ContentType, 'Evaluation.ContentType');
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var DepartmentForm = (function (_super) {
            __extends(DepartmentForm, _super);
            function DepartmentForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DepartmentForm;
        }(Serenity.PrefixedContext));
        DepartmentForm.formKey = 'Evaluation.Department';
        Evaluation.DepartmentForm = DepartmentForm;
        [['Name', function () { return Serenity.StringEditor; }], ['Remark', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(DepartmentForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var DepartmentRow;
        (function (DepartmentRow) {
            DepartmentRow.idProperty = 'Id';
            DepartmentRow.nameProperty = 'Name';
            DepartmentRow.localTextPrefix = 'Evaluation.Department';
            DepartmentRow.lookupKey = 'Evaluation.Department';
            function getLookup() {
                return Q.getLookup('Evaluation.Department');
            }
            DepartmentRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = DepartmentRow.Fields || (DepartmentRow.Fields = {}));
            ['Id', 'Name', 'Remark'].forEach(function (x) { return Fields[x] = x; });
        })(DepartmentRow = Evaluation.DepartmentRow || (Evaluation.DepartmentRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var DepartmentService;
        (function (DepartmentService) {
            DepartmentService.baseUrl = 'Evaluation/Department';
            var Methods;
            (function (Methods) {
            })(Methods = DepartmentService.Methods || (DepartmentService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DepartmentService[x] = function (r, s, o) { return Q.serviceRequest(DepartmentService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DepartmentService.baseUrl + '/' + x;
            });
        })(DepartmentService = Evaluation.DepartmentService || (Evaluation.DepartmentService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EmployeeExcelImportForm = (function (_super) {
            __extends(EmployeeExcelImportForm, _super);
            function EmployeeExcelImportForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EmployeeExcelImportForm;
        }(Serenity.PrefixedContext));
        EmployeeExcelImportForm.formKey = 'Evaluation.EmployeeExcelImport';
        Evaluation.EmployeeExcelImportForm = EmployeeExcelImportForm;
        [['FileName', function () { return Serenity.ImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(EmployeeExcelImportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EmployeeForm = (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        EmployeeForm.formKey = 'Evaluation.Employee';
        Evaluation.EmployeeForm = EmployeeForm;
        [['Name', function () { return Serenity.StringEditor; }], ['IdCard', function () { return Serenity.StringEditor; }], ['Gender', function () { return Serenity.StringEditor; }], ['BirthDate', function () { return Serenity.DateEditor; }], ['Email', function () { return Serenity.StringEditor; }], ['DepartmentId', function () { return Serenity.LookupEditor; }], ['Remark', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EmployeeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EmployeeImportService;
        (function (EmployeeImportService) {
            EmployeeImportService.baseUrl = 'Evaluation/EmployeeImport';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeImportService.Methods || (EmployeeImportService.Methods = {}));
            ['ExcelImport'].forEach(function (x) {
                EmployeeImportService[x] = function (r, s, o) { return Q.serviceRequest(EmployeeImportService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeeImportService.baseUrl + '/' + x;
            });
        })(EmployeeImportService = Evaluation.EmployeeImportService || (Evaluation.EmployeeImportService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'Id';
            EmployeeRow.nameProperty = 'Name';
            EmployeeRow.localTextPrefix = 'Evaluation.Employee';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ['Id', 'Name', 'IdCard', 'Gender', 'BirthDate', 'Email', 'DepartmentId', 'Remark', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = Evaluation.EmployeeRow || (Evaluation.EmployeeRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'Evaluation/Employee';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeService.Methods || (EmployeeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'AddEmployeeToUsers'].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) { return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeeService.baseUrl + '/' + x;
            });
        })(EmployeeService = Evaluation.EmployeeService || (Evaluation.EmployeeService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationFinalResultRow;
        (function (EvaluationFinalResultRow) {
            EvaluationFinalResultRow.idProperty = 'Id';
            EvaluationFinalResultRow.nameProperty = 'Title';
            EvaluationFinalResultRow.localTextPrefix = 'Evaluation.EvaluationFinalResult';
            EvaluationFinalResultRow.lookupKey = 'EvaluationFinalResult.ExamTitle';
            function getLookup() {
                return Q.getLookup('EvaluationFinalResult.ExamTitle');
            }
            EvaluationFinalResultRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EvaluationFinalResultRow.Fields || (EvaluationFinalResultRow.Fields = {}));
            ['Id', 'UserId', 'ExamId', 'Title', 'UserName', 'TotalScore', 'Grade', 'Email', 'DepartmentId', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(EvaluationFinalResultRow = Evaluation.EvaluationFinalResultRow || (Evaluation.EvaluationFinalResultRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationFinalResultService;
        (function (EvaluationFinalResultService) {
            EvaluationFinalResultService.baseUrl = 'Evaluation/EvaluationFinalResult';
            var Methods;
            (function (Methods) {
            })(Methods = EvaluationFinalResultService.Methods || (EvaluationFinalResultService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EvaluationFinalResultService[x] = function (r, s, o) { return Q.serviceRequest(EvaluationFinalResultService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EvaluationFinalResultService.baseUrl + '/' + x;
            });
        })(EvaluationFinalResultService = Evaluation.EvaluationFinalResultService || (Evaluation.EvaluationFinalResultService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemForm = (function (_super) {
            __extends(EvaluationItemForm, _super);
            function EvaluationItemForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EvaluationItemForm;
        }(Serenity.PrefixedContext));
        EvaluationItemForm.formKey = 'Evaluation.EvaluationItem';
        Evaluation.EvaluationItemForm = EvaluationItemForm;
        [['FirstKpiId', function () { return Serenity.LookupEditor; }], ['SecondKpiId', function () { return Serenity.LookupEditor; }], ['Content', function () { return Serenity.TextAreaEditor; }], ['ContentType', function () { return Serenity.EnumEditor; }], ['Score', function () { return Serenity.IntegerEditor; }], ['Mark', function () { return Serenity.TextAreaEditor; }], ['IsEnabled', function () { return Serenity.BooleanEditor; }], ['IsSelfEvaluation', function () { return Serenity.BooleanEditor; }], ['OrderNo', function () { return Serenity.IntegerEditor; }], ['Remark', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(EvaluationItemForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemRow;
        (function (EvaluationItemRow) {
            EvaluationItemRow.idProperty = 'Id';
            EvaluationItemRow.nameProperty = 'Content';
            EvaluationItemRow.localTextPrefix = 'Evaluation.EvaluationItem';
            var Fields;
            (function (Fields) {
            })(Fields = EvaluationItemRow.Fields || (EvaluationItemRow.Fields = {}));
            ['Id', 'OrderNo', 'Content', 'ContentType', 'Score', 'Mark', 'IsEnabled', 'IsSelfEvaluation', 'Remark', 'SecondKpiId', 'SecondKpiName', 'FirstKpiId', 'FirstKpiName'].forEach(function (x) { return Fields[x] = x; });
        })(EvaluationItemRow = Evaluation.EvaluationItemRow || (Evaluation.EvaluationItemRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemService;
        (function (EvaluationItemService) {
            EvaluationItemService.baseUrl = 'Evaluation/EvaluationItem';
            var Methods;
            (function (Methods) {
            })(Methods = EvaluationItemService.Methods || (EvaluationItemService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'GetSelfEvaluation', 'GetEvaluation1', 'GetEvaluation2', 'GetSelfEvaluationByExam', 'GetSelfEvaluation1ByExam', 'GetEvaluation1ByExam', 'GetEvaluation2ByExam', 'GetUserToUsers'].forEach(function (x) {
                EvaluationItemService[x] = function (r, s, o) { return Q.serviceRequest(EvaluationItemService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EvaluationItemService.baseUrl + '/' + x;
            });
        })(EvaluationItemService = Evaluation.EvaluationItemService || (Evaluation.EvaluationItemService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultDetailForm = (function (_super) {
            __extends(EvaluationResultDetailForm, _super);
            function EvaluationResultDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EvaluationResultDetailForm;
        }(Serenity.PrefixedContext));
        EvaluationResultDetailForm.formKey = 'Evaluation.EvaluationResultDetail';
        Evaluation.EvaluationResultDetailForm = EvaluationResultDetailForm;
        [['ExamId', function () { return Serenity.IntegerEditor; }], ['EvaluationItemId', function () { return Serenity.IntegerEditor; }], ['InputContent', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EvaluationResultDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultDetailRow;
        (function (EvaluationResultDetailRow) {
            EvaluationResultDetailRow.idProperty = 'Id';
            EvaluationResultDetailRow.nameProperty = 'InputContent';
            EvaluationResultDetailRow.localTextPrefix = 'Evaluation.EvaluationResultDetail';
            var Fields;
            (function (Fields) {
            })(Fields = EvaluationResultDetailRow.Fields || (EvaluationResultDetailRow.Fields = {}));
            ['Id', 'ExamId', 'EvaluationItemId', 'InputContent', 'Score', 'UserId', 'EvaluationUserId'].forEach(function (x) { return Fields[x] = x; });
        })(EvaluationResultDetailRow = Evaluation.EvaluationResultDetailRow || (Evaluation.EvaluationResultDetailRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultDetailService;
        (function (EvaluationResultDetailService) {
            EvaluationResultDetailService.baseUrl = 'Evaluation/EvaluationResultDetail';
            var Methods;
            (function (Methods) {
            })(Methods = EvaluationResultDetailService.Methods || (EvaluationResultDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Add'].forEach(function (x) {
                EvaluationResultDetailService[x] = function (r, s, o) { return Q.serviceRequest(EvaluationResultDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EvaluationResultDetailService.baseUrl + '/' + x;
            });
        })(EvaluationResultDetailService = Evaluation.EvaluationResultDetailService || (Evaluation.EvaluationResultDetailService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultViewRow;
        (function (EvaluationResultViewRow) {
            EvaluationResultViewRow.idProperty = 'Id';
            EvaluationResultViewRow.nameProperty = 'Username';
            EvaluationResultViewRow.localTextPrefix = 'Evaluation.EvaluationResultView';
            var Fields;
            (function (Fields) {
            })(Fields = EvaluationResultViewRow.Fields || (EvaluationResultViewRow.Fields = {}));
            ['Id', 'UserId', 'Username', 'ParentUserId', 'ExamId', 'Title', 'Email', 'EvaluationEmail', 'TotalScore', 'EvaluationUserId', 'EvaluationUser'].forEach(function (x) { return Fields[x] = x; });
        })(EvaluationResultViewRow = Evaluation.EvaluationResultViewRow || (Evaluation.EvaluationResultViewRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultViewService;
        (function (EvaluationResultViewService) {
            EvaluationResultViewService.baseUrl = 'Evaluation/EvaluationResultView';
            var Methods;
            (function (Methods) {
            })(Methods = EvaluationResultViewService.Methods || (EvaluationResultViewService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'SendNotifyEmail', 'BatchSendNotifyEmail'].forEach(function (x) {
                EvaluationResultViewService[x] = function (r, s, o) { return Q.serviceRequest(EvaluationResultViewService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EvaluationResultViewService.baseUrl + '/' + x;
            });
        })(EvaluationResultViewService = Evaluation.EvaluationResultViewService || (Evaluation.EvaluationResultViewService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ExamForm = (function (_super) {
            __extends(ExamForm, _super);
            function ExamForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ExamForm;
        }(Serenity.PrefixedContext));
        ExamForm.formKey = 'Evaluation.Exam';
        Evaluation.ExamForm = ExamForm;
        [['Title', function () { return Serenity.StringEditor; }], ['StartDate', function () { return Serenity.DateEditor; }], ['EndDate', function () { return Serenity.DateEditor; }], ['EvaluationIds', function () { return Serenity.StringEditor; }], ['IsEnabled', function () { return Serenity.BooleanEditor; }], ['Remark', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ExamForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ExamRow;
        (function (ExamRow) {
            ExamRow.idProperty = 'Id';
            ExamRow.nameProperty = 'Title';
            ExamRow.localTextPrefix = 'Evaluation.Exam';
            ExamRow.lookupKey = 'Evaluation.Exam';
            function getLookup() {
                return Q.getLookup('Evaluation.Exam');
            }
            ExamRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ExamRow.Fields || (ExamRow.Fields = {}));
            ['Id', 'Title', 'StartDate', 'EndDate', 'EvaluationIds', 'IsEnabled', 'Remark'].forEach(function (x) { return Fields[x] = x; });
        })(ExamRow = Evaluation.ExamRow || (Evaluation.ExamRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ExamService;
        (function (ExamService) {
            ExamService.baseUrl = 'Evaluation/Exam';
            var Methods;
            (function (Methods) {
            })(Methods = ExamService.Methods || (ExamService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Archive'].forEach(function (x) {
                ExamService[x] = function (r, s, o) { return Q.serviceRequest(ExamService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ExamService.baseUrl + '/' + x;
            });
        })(ExamService = Evaluation.ExamService || (Evaluation.ExamService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var FirstKpiForm = (function (_super) {
            __extends(FirstKpiForm, _super);
            function FirstKpiForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return FirstKpiForm;
        }(Serenity.PrefixedContext));
        FirstKpiForm.formKey = 'Evaluation.FirstKpi';
        Evaluation.FirstKpiForm = FirstKpiForm;
        [['OrderNo', function () { return Serenity.IntegerEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Remark', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(FirstKpiForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var FirstKpiRow;
        (function (FirstKpiRow) {
            FirstKpiRow.idProperty = 'Id';
            FirstKpiRow.nameProperty = 'Name';
            FirstKpiRow.localTextPrefix = 'Evaluation.FirstKpi';
            FirstKpiRow.lookupKey = 'Evaluation.FirstKpi';
            function getLookup() {
                return Q.getLookup('Evaluation.FirstKpi');
            }
            FirstKpiRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FirstKpiRow.Fields || (FirstKpiRow.Fields = {}));
            ['Id', 'OrderNo', 'Name', 'Remark'].forEach(function (x) { return Fields[x] = x; });
        })(FirstKpiRow = Evaluation.FirstKpiRow || (Evaluation.FirstKpiRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var FirstKpiService;
        (function (FirstKpiService) {
            FirstKpiService.baseUrl = 'Evaluation/FirstKpi';
            var Methods;
            (function (Methods) {
            })(Methods = FirstKpiService.Methods || (FirstKpiService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FirstKpiService[x] = function (r, s, o) { return Q.serviceRequest(FirstKpiService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FirstKpiService.baseUrl + '/' + x;
            });
        })(FirstKpiService = Evaluation.FirstKpiService || (Evaluation.FirstKpiService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var LeaderShipForm = (function (_super) {
            __extends(LeaderShipForm, _super);
            function LeaderShipForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LeaderShipForm;
        }(Serenity.PrefixedContext));
        LeaderShipForm.formKey = 'Evaluation.LeaderShip';
        Evaluation.LeaderShipForm = LeaderShipForm;
        [['UserId', function () { return Serenity.LookupEditor; }], ['ParentUserId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(LeaderShipForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var LeaderShipRow;
        (function (LeaderShipRow) {
            LeaderShipRow.idProperty = 'UserId';
            LeaderShipRow.localTextPrefix = 'Evaluation.LeaderShip';
            var Fields;
            (function (Fields) {
            })(Fields = LeaderShipRow.Fields || (LeaderShipRow.Fields = {}));
            ['UserId', 'ParentUserId', 'UserUsername', 'ParentUsername'].forEach(function (x) { return Fields[x] = x; });
        })(LeaderShipRow = Evaluation.LeaderShipRow || (Evaluation.LeaderShipRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var LeaderShipService;
        (function (LeaderShipService) {
            LeaderShipService.baseUrl = 'Evaluation/LeaderShip';
            var Methods;
            (function (Methods) {
            })(Methods = LeaderShipService.Methods || (LeaderShipService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'CheckCurrentUserIsParent'].forEach(function (x) {
                LeaderShipService[x] = function (r, s, o) { return Q.serviceRequest(LeaderShipService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LeaderShipService.baseUrl + '/' + x;
            });
        })(LeaderShipService = Evaluation.LeaderShipService || (Evaluation.LeaderShipService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ScoreDetailForm = (function (_super) {
            __extends(ScoreDetailForm, _super);
            function ScoreDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ScoreDetailForm;
        }(Serenity.PrefixedContext));
        ScoreDetailForm.formKey = 'Evaluation.ScoreDetail';
        Evaluation.ScoreDetailForm = ScoreDetailForm;
        [['EvaluationResultDetailId', function () { return Serenity.IntegerEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }], ['Score', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ScoreDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ScoreDetailRow;
        (function (ScoreDetailRow) {
            ScoreDetailRow.idProperty = 'Id';
            ScoreDetailRow.localTextPrefix = 'Evaluation.ScoreDetail';
            var Fields;
            (function (Fields) {
            })(Fields = ScoreDetailRow.Fields || (ScoreDetailRow.Fields = {}));
            ['Id', 'EvaluationResultDetailId', 'UserId', 'Score'].forEach(function (x) { return Fields[x] = x; });
        })(ScoreDetailRow = Evaluation.ScoreDetailRow || (Evaluation.ScoreDetailRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ScoreDetailService;
        (function (ScoreDetailService) {
            ScoreDetailService.baseUrl = 'Evaluation/ScoreDetail';
            var Methods;
            (function (Methods) {
            })(Methods = ScoreDetailService.Methods || (ScoreDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ScoreDetailService[x] = function (r, s, o) { return Q.serviceRequest(ScoreDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ScoreDetailService.baseUrl + '/' + x;
            });
        })(ScoreDetailService = Evaluation.ScoreDetailService || (Evaluation.ScoreDetailService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SecondKpiForm = (function (_super) {
            __extends(SecondKpiForm, _super);
            function SecondKpiForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SecondKpiForm;
        }(Serenity.PrefixedContext));
        SecondKpiForm.formKey = 'Evaluation.SecondKpi';
        Evaluation.SecondKpiForm = SecondKpiForm;
        [['FirstKpiId', function () { return Serenity.LookupEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['OrderNo', function () { return Serenity.IntegerEditor; }], ['Remark', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SecondKpiForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SecondKpiRow;
        (function (SecondKpiRow) {
            SecondKpiRow.idProperty = 'Id';
            SecondKpiRow.nameProperty = 'Name';
            SecondKpiRow.localTextPrefix = 'Evaluation.SecondKpi';
            SecondKpiRow.lookupKey = 'Evaluation.SecondKpi';
            function getLookup() {
                return Q.getLookup('Evaluation.SecondKpi');
            }
            SecondKpiRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SecondKpiRow.Fields || (SecondKpiRow.Fields = {}));
            ['Id', 'OrderNo', 'Name', 'Remark', 'FirstKpiId', 'FirstKpiName'].forEach(function (x) { return Fields[x] = x; });
        })(SecondKpiRow = Evaluation.SecondKpiRow || (Evaluation.SecondKpiRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SecondKpiService;
        (function (SecondKpiService) {
            SecondKpiService.baseUrl = 'Evaluation/SecondKpi';
            var Methods;
            (function (Methods) {
            })(Methods = SecondKpiService.Methods || (SecondKpiService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SecondKpiService[x] = function (r, s, o) { return Q.serviceRequest(SecondKpiService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SecondKpiService.baseUrl + '/' + x;
            });
        })(SecondKpiService = Evaluation.SecondKpiService || (Evaluation.SecondKpiService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SelfEvaluationRecordForm = (function (_super) {
            __extends(SelfEvaluationRecordForm, _super);
            function SelfEvaluationRecordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelfEvaluationRecordForm;
        }(Serenity.PrefixedContext));
        SelfEvaluationRecordForm.formKey = 'Evaluation.SelfEvaluationRecord';
        Evaluation.SelfEvaluationRecordForm = SelfEvaluationRecordForm;
        [['UserId', function () { return Serenity.IntegerEditor; }], ['ExamId', function () { return Serenity.IntegerEditor; }], ['EvaluationDate', function () { return Serenity.DateEditor; }], ['IsSelfEvaluated', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(SelfEvaluationRecordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SelfEvaluationRecordRow;
        (function (SelfEvaluationRecordRow) {
            SelfEvaluationRecordRow.idProperty = 'SelfEvaluationRecordId';
            SelfEvaluationRecordRow.localTextPrefix = 'Evaluation.SelfEvaluationRecord';
            var Fields;
            (function (Fields) {
            })(Fields = SelfEvaluationRecordRow.Fields || (SelfEvaluationRecordRow.Fields = {}));
            ['SelfEvaluationRecordId', 'UserId', 'ExamId', 'EvaluationDate', 'IsSelfEvaluated', 'Username', 'ExamTitle'].forEach(function (x) { return Fields[x] = x; });
        })(SelfEvaluationRecordRow = Evaluation.SelfEvaluationRecordRow || (Evaluation.SelfEvaluationRecordRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SelfEvaluationRecordService;
        (function (SelfEvaluationRecordService) {
            SelfEvaluationRecordService.baseUrl = 'Evaluation/SelfEvaluationRecord';
            var Methods;
            (function (Methods) {
            })(Methods = SelfEvaluationRecordService.Methods || (SelfEvaluationRecordService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SelfEvaluationRecordService[x] = function (r, s, o) { return Q.serviceRequest(SelfEvaluationRecordService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SelfEvaluationRecordService.baseUrl + '/' + x;
            });
        })(SelfEvaluationRecordService = Evaluation.SelfEvaluationRecordService || (Evaluation.SelfEvaluationRecordService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SelfEvaluationResultRow;
        (function (SelfEvaluationResultRow) {
            SelfEvaluationResultRow.idProperty = 'Id';
            SelfEvaluationResultRow.nameProperty = 'Content';
            SelfEvaluationResultRow.localTextPrefix = 'Evaluation.SelfEvaluationResult';
            SelfEvaluationResultRow.lookupKey = 'SelfEvaluationResult.DepartmentName';
            function getLookup() {
                return Q.getLookup('SelfEvaluationResult.DepartmentName');
            }
            SelfEvaluationResultRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SelfEvaluationResultRow.Fields || (SelfEvaluationResultRow.Fields = {}));
            ['Id', 'Title', 'Content', 'InputContent', 'Username', 'DepartmentName'].forEach(function (x) { return Fields[x] = x; });
        })(SelfEvaluationResultRow = Evaluation.SelfEvaluationResultRow || (Evaluation.SelfEvaluationResultRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SelfEvaluationResultService;
        (function (SelfEvaluationResultService) {
            SelfEvaluationResultService.baseUrl = 'Evaluation/SelfEvaluationResult';
            var Methods;
            (function (Methods) {
            })(Methods = SelfEvaluationResultService.Methods || (SelfEvaluationResultService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SelfEvaluationResultService[x] = function (r, s, o) { return Q.serviceRequest(SelfEvaluationResultService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SelfEvaluationResultService.baseUrl + '/' + x;
            });
        })(SelfEvaluationResultService = Evaluation.SelfEvaluationResultService || (Evaluation.SelfEvaluationResultService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ToDoListForm = (function (_super) {
            __extends(ToDoListForm, _super);
            function ToDoListForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ToDoListForm;
        }(Serenity.PrefixedContext));
        ToDoListForm.formKey = 'Evaluation.ToDoList';
        Evaluation.ToDoListForm = ToDoListForm;
        [['UserId', function () { return Serenity.LookupEditor; }], ['StartDate', function () { return Serenity.DateEditor; }], ['EndDate', function () { return Serenity.DateEditor; }], ['Title', function () { return Serenity.StringEditor; }], ['Content', function () { return Serenity.TextAreaEditor; }], ['ExamId', function () { return Serenity.LookupEditor; }], ['CreateBy', function () { return Serenity.LookupEditor; }], ['IsEnabled', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(ToDoListForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ToDoListRow;
        (function (ToDoListRow) {
            ToDoListRow.idProperty = 'Id';
            ToDoListRow.nameProperty = 'Title';
            ToDoListRow.localTextPrefix = 'Evaluation.ToDoList';
            var Fields;
            (function (Fields) {
            })(Fields = ToDoListRow.Fields || (ToDoListRow.Fields = {}));
            ['Id', 'UserId', 'Title', 'Content', 'IsComplete', 'UserUsername', 'StartDate', 'EndDate', 'CreateBy', 'CreateByUsername', 'Url', 'ExamId', 'ExamTitle', 'IsEnabled'].forEach(function (x) { return Fields[x] = x; });
        })(ToDoListRow = Evaluation.ToDoListRow || (Evaluation.ToDoListRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ToDoListService;
        (function (ToDoListService) {
            ToDoListService.baseUrl = 'Evaluation/ToDoList';
            var Methods;
            (function (Methods) {
            })(Methods = ToDoListService.Methods || (ToDoListService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'GetCurrentUserId'].forEach(function (x) {
                ToDoListService[x] = function (r, s, o) { return Q.serviceRequest(ToDoListService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ToDoListService.baseUrl + '/' + x;
            });
        })(ToDoListService = Evaluation.ToDoListService || (Evaluation.ToDoListService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var TodoListViewForm = (function (_super) {
            __extends(TodoListViewForm, _super);
            function TodoListViewForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TodoListViewForm;
        }(Serenity.PrefixedContext));
        TodoListViewForm.formKey = 'Evaluation.TodoListView';
        Evaluation.TodoListViewForm = TodoListViewForm;
        [['Id', function () { return Serenity.IntegerEditor; }], ['Username', function () { return Serenity.StringEditor; }], ['Url', function () { return Serenity.StringEditor; }], ['StartDate', function () { return Serenity.DateEditor; }], ['EndDate', function () { return Serenity.DateEditor; }], ['Title', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TodoListViewForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var TodoListViewRow;
        (function (TodoListViewRow) {
            TodoListViewRow.idProperty = 'Id';
            TodoListViewRow.nameProperty = 'Username';
            TodoListViewRow.localTextPrefix = 'Evaluation.TodoListView';
            var Fields;
            (function (Fields) {
            })(Fields = TodoListViewRow.Fields || (TodoListViewRow.Fields = {}));
            ['Id', 'UserId', 'Username', 'Email', 'Url', 'StartDate', 'EndDate', 'Title', 'IsComplete', 'IsEnabled', 'ExamId'].forEach(function (x) { return Fields[x] = x; });
        })(TodoListViewRow = Evaluation.TodoListViewRow || (Evaluation.TodoListViewRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var TodoListViewService;
        (function (TodoListViewService) {
            TodoListViewService.baseUrl = 'Evaluation/TodoListView';
            var Methods;
            (function (Methods) {
            })(Methods = TodoListViewService.Methods || (TodoListViewService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TodoListViewService[x] = function (r, s, o) { return Q.serviceRequest(TodoListViewService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TodoListViewService.baseUrl + '/' + x;
            });
        })(TodoListViewService = Evaluation.TodoListViewService || (Evaluation.TodoListViewService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationRelationExcelImportService;
        (function (UserEvaluationRelationExcelImportService) {
            UserEvaluationRelationExcelImportService.baseUrl = 'Evaluation/UserEvaluationRelationExcelImport';
            var Methods;
            (function (Methods) {
            })(Methods = UserEvaluationRelationExcelImportService.Methods || (UserEvaluationRelationExcelImportService.Methods = {}));
            ['ExcelImport'].forEach(function (x) {
                UserEvaluationRelationExcelImportService[x] = function (r, s, o) { return Q.serviceRequest(UserEvaluationRelationExcelImportService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserEvaluationRelationExcelImportService.baseUrl + '/' + x;
            });
        })(UserEvaluationRelationExcelImportService = Evaluation.UserEvaluationRelationExcelImportService || (Evaluation.UserEvaluationRelationExcelImportService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationRelationForm = (function (_super) {
            __extends(UserEvaluationRelationForm, _super);
            function UserEvaluationRelationForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserEvaluationRelationForm;
        }(Serenity.PrefixedContext));
        UserEvaluationRelationForm.formKey = 'Evaluation.UserEvaluationRelation';
        Evaluation.UserEvaluationRelationForm = UserEvaluationRelationForm;
        [['UserId', function () { return Serenity.LookupEditor; }], ['UserList', function () { return Serenity.LookupEditor; }], ['ExamId', function () { return Serenity.LookupEditor; }], ['Remark', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserEvaluationRelationForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationRelationImportForm = (function (_super) {
            __extends(UserEvaluationRelationImportForm, _super);
            function UserEvaluationRelationImportForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserEvaluationRelationImportForm;
        }(Serenity.PrefixedContext));
        UserEvaluationRelationImportForm.formKey = 'Evaluation.UserEvaluationRelationExcelImport';
        Evaluation.UserEvaluationRelationImportForm = UserEvaluationRelationImportForm;
        [['ExamId', function () { return Serenity.LookupEditor; }], ['FileName', function () { return Serenity.ImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(UserEvaluationRelationImportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationRelationRow;
        (function (UserEvaluationRelationRow) {
            UserEvaluationRelationRow.idProperty = 'Id';
            UserEvaluationRelationRow.nameProperty = 'UserUsername';
            UserEvaluationRelationRow.localTextPrefix = 'Evaluation.UserEvaluationRelation';
            var Fields;
            (function (Fields) {
            })(Fields = UserEvaluationRelationRow.Fields || (UserEvaluationRelationRow.Fields = {}));
            ['Id', 'UserId', 'UserList', 'ExamId', 'Remark', 'UserUsername', 'ExamTitle'].forEach(function (x) { return Fields[x] = x; });
        })(UserEvaluationRelationRow = Evaluation.UserEvaluationRelationRow || (Evaluation.UserEvaluationRelationRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationRelationService;
        (function (UserEvaluationRelationService) {
            UserEvaluationRelationService.baseUrl = 'Evaluation/UserEvaluationRelation';
            var Methods;
            (function (Methods) {
            })(Methods = UserEvaluationRelationService.Methods || (UserEvaluationRelationService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'BatchSendEmail', 'BatchDelete'].forEach(function (x) {
                UserEvaluationRelationService[x] = function (r, s, o) { return Q.serviceRequest(UserEvaluationRelationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserEvaluationRelationService.baseUrl + '/' + x;
            });
        })(UserEvaluationRelationService = Evaluation.UserEvaluationRelationService || (Evaluation.UserEvaluationRelationService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationToUserForm = (function (_super) {
            __extends(UserEvaluationToUserForm, _super);
            function UserEvaluationToUserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return UserEvaluationToUserForm;
        }(Serenity.PrefixedContext));
        UserEvaluationToUserForm.formKey = 'Evaluation.UserEvaluationToUser';
        Evaluation.UserEvaluationToUserForm = UserEvaluationToUserForm;
        [['UserEvaluationRelationId', function () { return Serenity.IntegerEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(UserEvaluationToUserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationToUserRow;
        (function (UserEvaluationToUserRow) {
            UserEvaluationToUserRow.idProperty = 'Id';
            UserEvaluationToUserRow.localTextPrefix = 'Evaluation.UserEvaluationToUser';
            var Fields;
            (function (Fields) {
            })(Fields = UserEvaluationToUserRow.Fields || (UserEvaluationToUserRow.Fields = {}));
            ['Id', 'UserEvaluationRelationId', 'UserId', 'UserEvaluationRelationUserId', 'UserEvaluationRelationExamId', 'UserEvaluationRelationRemark', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive'].forEach(function (x) { return Fields[x] = x; });
        })(UserEvaluationToUserRow = Evaluation.UserEvaluationToUserRow || (Evaluation.UserEvaluationToUserRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationToUserService;
        (function (UserEvaluationToUserService) {
            UserEvaluationToUserService.baseUrl = 'Evaluation/UserEvaluationToUser';
            var Methods;
            (function (Methods) {
            })(Methods = UserEvaluationToUserService.Methods || (UserEvaluationToUserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                UserEvaluationToUserService[x] = function (r, s, o) { return Q.serviceRequest(UserEvaluationToUserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserEvaluationToUserService.baseUrl + '/' + x;
            });
        })(UserEvaluationToUserService = Evaluation.UserEvaluationToUserService || (Evaluation.UserEvaluationToUserService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserToUserViewRow;
        (function (UserToUserViewRow) {
            UserToUserViewRow.idProperty = 'Id';
            UserToUserViewRow.localTextPrefix = 'Evaluation.UserToUserView';
            var Fields;
            (function (Fields) {
            })(Fields = UserToUserViewRow.Fields || (UserToUserViewRow.Fields = {}));
            ['Id', 'UserId', 'ExamId', 'EvaluationUserId', 'Email', 'Username', 'EvaluationEmail', 'EvaluationName', 'Title', 'HasEvaluated'].forEach(function (x) { return Fields[x] = x; });
        })(UserToUserViewRow = Evaluation.UserToUserViewRow || (Evaluation.UserToUserViewRow = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserToUserViewService;
        (function (UserToUserViewService) {
            UserToUserViewService.baseUrl = 'Evaluation/UserToUserView';
            var Methods;
            (function (Methods) {
            })(Methods = UserToUserViewService.Methods || (UserToUserViewService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                UserToUserViewService[x] = function (r, s, o) { return Q.serviceRequest(UserToUserViewService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserToUserViewService.baseUrl + '/' + x;
            });
        })(UserToUserViewService = Evaluation.UserToUserViewService || (Evaluation.UserToUserViewService = {}));
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            RoleGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            RoleGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = hr.Authorization || (hr.Authorization = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var ChooseRoleDialog = (function (_super) {
            __extends(ChooseRoleDialog, _super);
            function ChooseRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                return _this;
            }
            ChooseRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/BatchUpdate', {
                                UserIds: _this.options.userIDs,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                                _this.options.userGrid.refresh();
                                _this.options.userGrid.rowSelection.clear();
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = "分配角色";
                return opt;
            };
            ChooseRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return ChooseRoleDialog;
        }(Serenity.TemplatedDialog));
        ChooseRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ChooseRoleDialog);
        Administration.ChooseRoleDialog = ChooseRoleDialog;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            UserGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            UserGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            //protected getColumns() {
            //    var columns = super.getColumns();
            //    columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            //    return columns;
            //}
            UserGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: '分配角色',
                    //cssClass: 'btn btn-danger',
                    icon: 'icon-lock',
                    onClick: function () {
                        var selectedKeys = _this.rowSelection.getSelectedKeys();
                        if (selectedKeys.length == 0) {
                            Q.alert("请选择需要分配角色的用户");
                            return;
                        }
                        var userIds = selectedKeys.map(function (p) { return parseInt(p, 10); });
                        var grid = _this;
                        new Administration.ChooseRoleDialog({
                            userIDs: userIds,
                            userGrid: grid
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: '批量重置密码',
                    //cssClass: 'btn btn-danger',
                    icon: 'fa fa-key',
                    onClick: function () {
                        var selectedKeys = _this.rowSelection.getSelectedKeys();
                        if (selectedKeys.length === 0) {
                            Q.alert("请选择需要重置密码的用户");
                            return;
                        }
                        var userIds = selectedKeys.map(function (p) { return parseInt(p, 10); });
                        Administration.UserService.BatchUpdate({ Userids: userIds }, function () {
                            Q.notifySuccess("密码已经重置");
                        });
                        //let grid = this;
                        //new ChooseRoleDialog({
                        //    userIDs: userIds,
                        //    userGrid: grid
                        //}).dialogOpen();
                    }
                });
                return buttons;
            };
            UserGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            UserGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            Administration.UserService.Delete({
                                EntityId: item.UserId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            //TODO: 通过这种方式限制一个用户对应一个角色有点勉强，应该是将checkbox 改成radiocheck
            RoleCheckEditor.prototype.itemSelectedChanged = function (item) {
                var items = this.view.getItems();
                var selectedItems = items.filter(function (p) { return p.isSelected; });
                if (selectedItems.length >= 2) {
                    Q.alert("一个用户只能选择一个角色");
                    item.isSelected = false;
                    return;
                }
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = hr.Administration || (hr.Administration = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var CompanyEvaluationArchiveGrid = (function (_super) {
            __extends(CompanyEvaluationArchiveGrid, _super);
            function CompanyEvaluationArchiveGrid(container) {
                return _super.call(this, container) || this;
            }
            CompanyEvaluationArchiveGrid.prototype.getColumnsKey = function () { return 'Archive.CompanyEvaluationArchive'; };
            //protected getDialogType() { return CompanyEvaluationArchiveDialog; }
            CompanyEvaluationArchiveGrid.prototype.getIdProperty = function () { return Archive.CompanyEvaluationArchiveRow.idProperty; };
            CompanyEvaluationArchiveGrid.prototype.getLocalTextPrefix = function () { return Archive.CompanyEvaluationArchiveRow.localTextPrefix; };
            CompanyEvaluationArchiveGrid.prototype.getService = function () { return Archive.CompanyEvaluationArchiveService.baseUrl; };
            CompanyEvaluationArchiveGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CompanyEvaluationArchiveGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            CompanyEvaluationArchiveGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            CompanyEvaluationArchiveGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                return buttons.filter(function (x) { return x.cssClass !== 'add-button'; });
            };
            return CompanyEvaluationArchiveGrid;
        }(Serenity.EntityGrid));
        CompanyEvaluationArchiveGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CompanyEvaluationArchiveGrid);
        Archive.CompanyEvaluationArchiveGrid = CompanyEvaluationArchiveGrid;
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var EvaluationFinalResultArchiveGrid = (function (_super) {
            __extends(EvaluationFinalResultArchiveGrid, _super);
            function EvaluationFinalResultArchiveGrid(container) {
                return _super.call(this, container) || this;
            }
            EvaluationFinalResultArchiveGrid.prototype.getColumnsKey = function () { return 'Archive.EvaluationFinalResultArchive'; };
            //protected getDialogType() { return EvaluationFinalResultArchiveDialog; }
            EvaluationFinalResultArchiveGrid.prototype.getIdProperty = function () { return Archive.EvaluationFinalResultArchiveRow.idProperty; };
            EvaluationFinalResultArchiveGrid.prototype.getLocalTextPrefix = function () { return Archive.EvaluationFinalResultArchiveRow.localTextPrefix; };
            EvaluationFinalResultArchiveGrid.prototype.getService = function () { return Archive.EvaluationFinalResultArchiveService.baseUrl; };
            EvaluationFinalResultArchiveGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            EvaluationFinalResultArchiveGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            EvaluationFinalResultArchiveGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            EvaluationFinalResultArchiveGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                return buttons.filter(function (x) { return x.cssClass !== 'add-button'; });
            };
            return EvaluationFinalResultArchiveGrid;
        }(Serenity.EntityGrid));
        EvaluationFinalResultArchiveGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EvaluationFinalResultArchiveGrid);
        Archive.EvaluationFinalResultArchiveGrid = EvaluationFinalResultArchiveGrid;
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var EvaluationFinalResultDetailArchiveGrid = (function (_super) {
            __extends(EvaluationFinalResultDetailArchiveGrid, _super);
            function EvaluationFinalResultDetailArchiveGrid(container) {
                return _super.call(this, container) || this;
            }
            EvaluationFinalResultDetailArchiveGrid.prototype.getColumnsKey = function () { return 'Archive.EvaluationFinalResultDetailArchive'; };
            //protected getDialogType() { return EvaluationFinalResultDetailArchiveDialog; }
            EvaluationFinalResultDetailArchiveGrid.prototype.getIdProperty = function () { return Archive.EvaluationFinalResultDetailArchiveRow.idProperty; };
            EvaluationFinalResultDetailArchiveGrid.prototype.getLocalTextPrefix = function () { return Archive.EvaluationFinalResultDetailArchiveRow.localTextPrefix; };
            EvaluationFinalResultDetailArchiveGrid.prototype.getService = function () { return Archive.EvaluationFinalResultDetailArchiveService.baseUrl; };
            EvaluationFinalResultDetailArchiveGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            EvaluationFinalResultDetailArchiveGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            EvaluationFinalResultDetailArchiveGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            EvaluationFinalResultDetailArchiveGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                return buttons.filter(function (x) { return x.cssClass !== 'add-button'; });
            };
            return EvaluationFinalResultDetailArchiveGrid;
        }(Serenity.EntityGrid));
        EvaluationFinalResultDetailArchiveGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EvaluationFinalResultDetailArchiveGrid);
        Archive.EvaluationFinalResultDetailArchiveGrid = EvaluationFinalResultDetailArchiveGrid;
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var Evaluation1 = (function () {
            function Evaluation1(container) {
                //this.InitView(container);
                this.container = container;
            }
            Evaluation1.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var res = Archive.ExamArchiveService.GetEvaluation1({ ExamId: examId }, function (response) {
                    console.log(response);
                    var grps = response.reduce(function (result, current) {
                        result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                        result[current.FirstKpiName].push(current);
                        return result;
                    }, {});
                    var html = "<div class='row'> <table>\n                                <tr>\n                                    <th class='text-center' style='font-size:18px;' colspan='4'>\u4ED6\u4EBA\u8BC4\u4EF7</th>\n                                </tr>\n                                    <tr>\n                                        <td style='width:80px;'>\u8003\u6838\u9879\u76EE</td>\n                                        <td style='width:80px;'>\u8BC4\u4EF7\u5185\u5BB9</td>\n                                        <td style='min-width:400px;'>\u8BC4\u4EF7\u6807\u51C6</td>\n                                        <td style='width:80px;'>\u5F97\u5206</td>\n                                    </tr>\n                                ";
                    for (var pro in grps) {
                        //console.log(pro);
                        var subGrps = grps[pro].reduce(function (result, current) {
                            result[current.SecondKpiName] = result[current.SecondKpiName] || [];
                            result[current.SecondKpiName].push(current);
                            return result;
                        }, {});
                        console.log(subGrps);
                        var subKeys = [];
                        for (var subpro in subGrps) {
                            subKeys.push(subpro);
                        }
                        var toprowpan = subKeys.length;
                        var colspan = 5;
                        var i = 0;
                        for (var subpro in subGrps) {
                            var subarr = subGrps[subpro];
                            html += '<tr>';
                            if (i === 0) {
                                html += "<td rowspan='" + toprowpan + "' style='vertical-align: middle;width:80px'>" + pro + "</td>";
                            }
                            i++;
                            html += "<td>" + subpro + "</td>";
                            $.each(subarr, function (index, value) {
                                html += "<td><textarea style='width:100%;min-height:100px;' type='text'>" + value.Content + "</textarea></td>";
                            });
                            html += '<td><input type="text" /></td></tr>';
                        }
                    }
                    html += "<tr><td colspan='4' class='text-center'><a href='SelfEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;&nbsp;<a href='Evaluation2?i=" + examId + "'><i class='fa fa-arrow-right' aria-hidden='true'></i>\u4E0B\u4E00\u9875</a></td><tr></table></div>";
                    _this.container.html(html);
                });
            };
            return Evaluation1;
        }());
        Archive.Evaluation1 = Evaluation1;
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var Evaluation2 = (function () {
            function Evaluation2(container) {
                //this.InitView(container);
                this.container = container;
            }
            Evaluation2.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var res = Archive.ExamArchiveService.GetEvaluation2({ ExamId: examId }, function (response) {
                    console.log(response);
                    var grps = response.reduce(function (result, current) {
                        result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                        result[current.FirstKpiName].push(current);
                        return result;
                    }, {});
                    var html = "<div class='row'><table>\n                                <tr>\n                                    <th class='text-center' style='font-size:18px;' colspan='8'>\u4ED6\u4EBA\u8BC4\u4EF7</th>\n                                </tr>\n                               \n                                    <tr>\n                                        <td style='width:80px;'>\u8003\u6838\u9879\u76EE</td>\n                                        <td style='width:80px;'>\u8BC4\u4EF7\u5185\u5BB9</td>\n                                        <td colspan='5' style='min-width:400px;'>\u8BC4\u4EF7\u6807\u51C6</td>\n                                    </tr>\n                                ";
                    for (var pro in grps) {
                        //console.log(pro);
                        var subGrps = grps[pro].reduce(function (result, current) {
                            result[current.SecondKpiName] = result[current.SecondKpiName] || [];
                            result[current.SecondKpiName].push(current);
                            return result;
                        }, {});
                        console.log(subGrps);
                        var subKeys = [];
                        for (var subpro in subGrps) {
                            subKeys.push(subpro);
                        }
                        var toprowpan = subKeys.length;
                        var colspan = 5;
                        var i = 0;
                        for (var subpro in subGrps) {
                            var subarr = subGrps[subpro];
                            html += '<tr>';
                            if (i === 0) {
                                html += "<td rowspan='" + toprowpan + "' style='vertical-align: middle;width:80px'>" + pro + "</td>";
                            }
                            i++;
                            html += "<td style='vertical-align:middle;'>" + subpro + "</td>";
                            $.each(subarr, function (index, value) {
                                html += "<td style='vertical-align:bottom;'><label style='font-weight:normal'>" + value.Content + "(" + value.Score + "\u5206)<br/><input type=\"radio\" name='" + value.SecondKpiName + "' value='" + value.Score + "' style='width:100%'/></label> </td>";
                            });
                        }
                    }
                    html += "<tr><td colspan='8' class='text-center'><a href='Evaluation1?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a></td><tr></table></div>";
                    _this.container.html(html);
                });
            };
            return Evaluation2;
        }());
        Archive.Evaluation2 = Evaluation2;
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var ExamArchiveGrid = (function (_super) {
            __extends(ExamArchiveGrid, _super);
            function ExamArchiveGrid(container) {
                return _super.call(this, container) || this;
            }
            ExamArchiveGrid.prototype.getColumnsKey = function () { return 'Archive.ExamArchive'; };
            ExamArchiveGrid.prototype.getDialogType = function () { return ExamArchiveDialog; };
            ExamArchiveGrid.prototype.getIdProperty = function () { return Archive.ExamArchiveRow.idProperty; };
            ExamArchiveGrid.prototype.getLocalTextPrefix = function () { return Archive.ExamArchiveRow.localTextPrefix; };
            ExamArchiveGrid.prototype.getService = function () { return Archive.ExamArchiveService.baseUrl; };
            return ExamArchiveGrid;
        }(Serenity.EntityGrid));
        ExamArchiveGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ExamArchiveGrid);
        Archive.ExamArchiveGrid = ExamArchiveGrid;
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var SelfEvaluation = (function () {
            function SelfEvaluation(container) {
                //this.InitView(container);
                this.container = container;
            }
            SelfEvaluation.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                Archive.ExamArchiveService.GetExamArchiveList({}, function (response) {
                    console.log(response);
                    var opts = "<select id='exam_list' class='form-control'><option value='0'>请选择考核标题</option>";
                    response.Entities.forEach(function (value, index) {
                        if (value.Id === examId) {
                            opts += "<option value=" + value.ExamId + " selected>" + value.ExamTitle + "</option>";
                        }
                        else {
                            opts += "<option value=" + value.ExamId + ">" + value.ExamTitle + "</option>";
                        }
                    });
                    opts += "</select><div id='exam_detail' class='row'></div>";
                    _this.container.html(opts);
                    var slt = $('#exam_list');
                    var exam_detail = $('#exam_detail');
                    if (examId) {
                        _this.initHtml(exam_detail, examId);
                    }
                    slt.change(function () {
                        var examId = parseInt(slt.val());
                        if (examId === 0) {
                            Q.notifyWarning('请选择考核标题');
                        }
                        else {
                            _this.initHtml(exam_detail, examId);
                        }
                    });
                });
            };
            SelfEvaluation.prototype.initHtml = function (container, examId) {
                var res = Archive.ExamArchiveService.GetSelfEvaluation({ ExamId: examId }, function (response) {
                    var html = "<table>\n                                   <tr>\n                                        <th colspan='4' class='text-center' style='font-size:18px'>\n                                            \u81EA\u6211\u8BC4\u4EF7\n                                        </th>\n                                    </tr>\n                                ";
                    if (response !== null) {
                        var count_1 = res.responseJSON.length;
                        if (res.responseJSON.length !== 0) {
                            res.responseJSON.forEach(function (item, index) {
                                html += "<tr>";
                                if (index == 0) {
                                    html += "<td rowspan='" + count_1 + "' style='vertical-align: middle;width:80px'>" + item.FirstKpiName + "</td>";
                                }
                                html += "<td width='80px'>" + item.SecondKpiName + "</td>\n                                    <td width='150px'>" + item.Content + "</td>";
                                if (item.ContentType === 1) {
                                    //输入框
                                    html += "<td>" + item.Mark + "<br/><textarea style='width:100%;min-height:150px;'></textarea></td>";
                                }
                                //html += `<td style='width:150px;'>${item.Remark}</td>`;
                                html += "</tr>";
                            });
                            html += "<tr><td colspan='4' class='text-center'><a href='Evaluation1?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table>";
                        }
                        else {
                            html += "<tr><td colspan='4'>请添加或启用自我评价内容</td></tr>";
                            html += "<tr><td colspan='4' class='text-center'><a href='Evaluation1?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table>";
                        }
                    }
                    else {
                        html += "<tr><td colspan='4'>请添加或启用自我评价内容</td></tr>";
                        html += "<tr><td colspan='4' class='text-center'><a href='Evaluation1?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table>";
                    }
                    container.html(html);
                });
            };
            return SelfEvaluation;
        }());
        Archive.SelfEvaluation = SelfEvaluation;
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Archive;
    (function (Archive) {
        var SelfEvaluationResultArchiveGrid = (function (_super) {
            __extends(SelfEvaluationResultArchiveGrid, _super);
            function SelfEvaluationResultArchiveGrid(container) {
                return _super.call(this, container) || this;
            }
            SelfEvaluationResultArchiveGrid.prototype.getColumnsKey = function () { return 'Archive.SelfEvaluationResultArchive'; };
            //protected getDialogType() { return SelfEvaluationResultArchiveDialog; }
            SelfEvaluationResultArchiveGrid.prototype.getIdProperty = function () { return Archive.SelfEvaluationResultArchiveRow.idProperty; };
            SelfEvaluationResultArchiveGrid.prototype.getLocalTextPrefix = function () { return Archive.SelfEvaluationResultArchiveRow.localTextPrefix; };
            SelfEvaluationResultArchiveGrid.prototype.getService = function () { return Archive.SelfEvaluationResultArchiveService.baseUrl; };
            SelfEvaluationResultArchiveGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            SelfEvaluationResultArchiveGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            SelfEvaluationResultArchiveGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            SelfEvaluationResultArchiveGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                return buttons.filter(function (x) { return x.cssClass !== 'add-button'; });
            };
            return SelfEvaluationResultArchiveGrid;
        }(Serenity.EntityGrid));
        SelfEvaluationResultArchiveGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SelfEvaluationResultArchiveGrid);
        Archive.SelfEvaluationResultArchiveGrid = SelfEvaluationResultArchiveGrid;
    })(Archive = hr.Archive || (hr.Archive = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    hr.BasicProgressDialog = BasicProgressDialog;
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new hr.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = hr.DialogUtils || (hr.DialogUtils = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = hr.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = hr.LanguageList || (hr.LanguageList = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Utils;
    (function (Utils) {
        function getQueryString(field, url) {
            var href = url ? url : window.location.href;
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(href);
            return string ? string[1] : null;
        }
        Utils.getQueryString = getQueryString;
        function getCurrentUserId() {
            hr.Evaluation.ToDoListService.GetCurrentUserId(null, function (response) {
                return response;
            }, {
                async: false
            });
        }
        Utils.getCurrentUserId = getCurrentUserId;
    })(Utils = hr.Utils || (hr.Utils = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var hr;
(function (hr) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('hr');
        Serenity.EntityDialog.defaultLanguageList = hr.LanguageList.getValue;
        Serenity.DataGrid.defaultPersistanceStorage = window.localStorage;
    })(ScriptInitialization = hr.ScriptInitialization || (hr.ScriptInitialization = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = hr.Common || (hr.Common = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var CompanyEvaluationDialog = (function (_super) {
            __extends(CompanyEvaluationDialog, _super);
            function CompanyEvaluationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CompanyEvaluationForm(_this.idPrefix);
                return _this;
            }
            CompanyEvaluationDialog.prototype.getFormKey = function () { return CompanyEvaluationForm.formKey; };
            CompanyEvaluationDialog.prototype.getIdProperty = function () { return Evaluation.CompanyEvaluationRow.idProperty; };
            CompanyEvaluationDialog.prototype.getLocalTextPrefix = function () { return Evaluation.CompanyEvaluationRow.localTextPrefix; };
            CompanyEvaluationDialog.prototype.getService = function () { return Evaluation.CompanyEvaluationService.baseUrl; };
            return CompanyEvaluationDialog;
        }(Serenity.EntityDialog));
        CompanyEvaluationDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], CompanyEvaluationDialog);
        Evaluation.CompanyEvaluationDialog = CompanyEvaluationDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var CompanyEvaluationGrid = (function (_super) {
            __extends(CompanyEvaluationGrid, _super);
            function CompanyEvaluationGrid(container) {
                return _super.call(this, container) || this;
            }
            CompanyEvaluationGrid.prototype.getColumnsKey = function () { return 'Evaluation.CompanyEvaluation'; };
            CompanyEvaluationGrid.prototype.getDialogType = function () { return Evaluation.CompanyEvaluationDialog; };
            CompanyEvaluationGrid.prototype.getIdProperty = function () { return Evaluation.CompanyEvaluationRow.idProperty; };
            CompanyEvaluationGrid.prototype.getLocalTextPrefix = function () { return Evaluation.CompanyEvaluationRow.localTextPrefix; };
            CompanyEvaluationGrid.prototype.getService = function () { return Evaluation.CompanyEvaluationService.baseUrl; };
            CompanyEvaluationGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass === "add-button"; }), 1);
                buttons.push(hr.Common.ExcelExportHelper.createToolButton({
                    title: '导出Excel',
                    hint: '导出Excel',
                    grid: this,
                    service: Evaluation.CompanyEvaluationService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                return buttons;
            };
            CompanyEvaluationGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            CompanyEvaluationGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            //protected getColumns() {
            //    var columns = super.getColumns();
            //    columns.unshift({
            //        field: 'Delete Row',
            //        name: '',
            //        format: ctx => '<a class="inline-action delete-row" title="delete">' +
            //            '<i class="fa fa-trash-o text-red"></i></a>',
            //        width: 24,
            //        minWidth: 24,
            //        maxWidth: 24
            //    });
            //    return columns;
            //}
            CompanyEvaluationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            Evaluation.CompanyEvaluationService.Delete({
                                EntityId: item.CompanyEvaluationId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            CompanyEvaluationGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                if (hr.Authorization.userDefinition.IsAdmin) {
                    return filters;
                }
                if (hr.Authorization.hasPermission("Evaluation:Users:LookupScript") && !hr.Authorization.hasPermission("Administration:Security")) {
                    var fld_1 = Evaluation.CompanyEvaluationRow.Fields;
                    if (hr.Authorization.userDefinition.DepartmentId) {
                        Q.first(filters, function (x) { return x.field === fld_1.DepartmentId; }).init = function (w) {
                            var editor = w;
                            editor.value = hr.Authorization.userDefinition.DepartmentId.toString();
                            editor.element.attr("disabled", "disabled");
                        };
                        return filters.filter(function (x) { return x.field !== fld_1.UserId; });
                    }
                }
                return filters;
            };
            return CompanyEvaluationGrid;
        }(Serenity.EntityGrid));
        CompanyEvaluationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CompanyEvaluationGrid);
        Evaluation.CompanyEvaluationGrid = CompanyEvaluationGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var DepartmentDialog = (function (_super) {
            __extends(DepartmentDialog, _super);
            function DepartmentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.DepartmentForm(_this.idPrefix);
                return _this;
                //dialogOpen() {
                //    super.dialogOpen();
                //    this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                //}
            }
            DepartmentDialog.prototype.getFormKey = function () { return Evaluation.DepartmentForm.formKey; };
            DepartmentDialog.prototype.getIdProperty = function () { return Evaluation.DepartmentRow.idProperty; };
            DepartmentDialog.prototype.getLocalTextPrefix = function () { return Evaluation.DepartmentRow.localTextPrefix; };
            DepartmentDialog.prototype.getNameProperty = function () { return Evaluation.DepartmentRow.nameProperty; };
            DepartmentDialog.prototype.getService = function () { return Evaluation.DepartmentService.baseUrl; };
            return DepartmentDialog;
        }(Serenity.EntityDialog));
        DepartmentDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], DepartmentDialog);
        Evaluation.DepartmentDialog = DepartmentDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var DepartmentGrid = (function (_super) {
            __extends(DepartmentGrid, _super);
            function DepartmentGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartmentGrid.prototype.getColumnsKey = function () { return 'Evaluation.Department'; };
            DepartmentGrid.prototype.getDialogType = function () { return Evaluation.DepartmentDialog; };
            DepartmentGrid.prototype.getIdProperty = function () { return Evaluation.DepartmentRow.idProperty; };
            DepartmentGrid.prototype.getLocalTextPrefix = function () { return Evaluation.DepartmentRow.localTextPrefix; };
            DepartmentGrid.prototype.getService = function () { return Evaluation.DepartmentService.baseUrl; };
            DepartmentGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            DepartmentGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            DepartmentGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            return DepartmentGrid;
        }(Serenity.EntityGrid));
        DepartmentGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], DepartmentGrid);
        Evaluation.DepartmentGrid = DepartmentGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EmployeeDialog = (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.EmployeeForm(_this.idPrefix);
                return _this;
                //dialogOpen() {
                //    super.dialogOpen();
                //    this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                //}
            }
            EmployeeDialog.prototype.getFormKey = function () { return Evaluation.EmployeeForm.formKey; };
            EmployeeDialog.prototype.getIdProperty = function () { return Evaluation.EmployeeRow.idProperty; };
            EmployeeDialog.prototype.getLocalTextPrefix = function () { return Evaluation.EmployeeRow.localTextPrefix; };
            EmployeeDialog.prototype.getNameProperty = function () { return Evaluation.EmployeeRow.nameProperty; };
            EmployeeDialog.prototype.getService = function () { return Evaluation.EmployeeService.baseUrl; };
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        EmployeeDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], EmployeeDialog);
        Evaluation.EmployeeDialog = EmployeeDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EmployeeExcelImportDialog = (function (_super) {
            __extends(EmployeeExcelImportDialog, _super);
            function EmployeeExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Evaluation.EmployeeExcelImportForm(_this.idPrefix);
                return _this;
            }
            EmployeeExcelImportDialog.prototype.getDialogTitle = function () {
                return "导入Excel";
            };
            EmployeeExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: '导入',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            if (_this.form.FileName.value.Filename.substr(_this.form.FileName.value.Filename.lastIndexOf(".")) !== ".xlsx") {
                                Q.notifyError("The only support excel file is above the excel 2007!");
                                return;
                            }
                            Evaluation.EmployeeImportService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('新增: ' + (response.Inserted || 0) +
                                    ', 更新: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: '取消',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            return EmployeeExcelImportDialog;
        }(Serenity.PropertyDialog));
        EmployeeExcelImportDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeeExcelImportDialog);
        Evaluation.EmployeeExcelImportDialog = EmployeeExcelImportDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EmployeeGrid = (function (_super) {
            __extends(EmployeeGrid, _super);
            function EmployeeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeGrid.prototype.getColumnsKey = function () { return 'Evaluation.Employee'; };
            EmployeeGrid.prototype.getDialogType = function () { return Evaluation.EmployeeDialog; };
            EmployeeGrid.prototype.getIdProperty = function () { return Evaluation.EmployeeRow.idProperty; };
            EmployeeGrid.prototype.getLocalTextPrefix = function () { return Evaluation.EmployeeRow.localTextPrefix; };
            EmployeeGrid.prototype.getService = function () { return Evaluation.EmployeeService.baseUrl; };
            EmployeeGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            EmployeeGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our export button
                buttons.push(hr.Common.ExcelExportHelper.createToolButton({
                    title: '导出Excel',
                    hint: '导出Excel',
                    grid: this,
                    service: Evaluation.EmployeeService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                // add our import button
                buttons.push({
                    title: '导入Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new Evaluation.EmployeeExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    },
                    separator: true
                });
                buttons.push({
                    title: "添加为系统用户",
                    onClick: function () {
                        var selectedKeys = _this.rowSelection.getSelectedKeys();
                        if (selectedKeys.length == 0) {
                            Q.warning("请选择要添加的员工");
                            return;
                        }
                        Q.serviceCall({
                            url: Q.resolveUrl("~/Services/Evaluation/Employee/AddEmployeeToUsers"),
                            request: {
                                Ids: selectedKeys
                            },
                            onSuccess: function (response) {
                                Q.information(Q.text('Success!'), function () {
                                    window.location.href = Q.resolveUrl('~/Administration/User');
                                });
                            }
                        });
                    }
                });
                return buttons;
            };
            EmployeeGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            EmployeeGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                //grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            EmployeeGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            EmployeeGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            Evaluation.EmployeeService.Delete({
                                EntityId: item.Id,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        EmployeeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeeGrid);
        Evaluation.EmployeeGrid = EmployeeGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var CompanyEvaluation = (function () {
            function CompanyEvaluation(container) {
                //this.InitView(container);
                this.container = container;
            }
            CompanyEvaluation.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var userId = parseInt(hr.Utils.getQueryString("p", window.location.href));
                //console.log(userId);
                var entity;
                Evaluation.CompanyEvaluationService.GetEvaluation({
                    UserId: userId,
                    ExamId: examId
                }, (function (response) {
                    if (response && response.length > 0)
                        entity = response[0];
                    var html = "";
                    if (entity) {
                        html =
                            "<div class='container'>\n                                <div class='row'>\n                                    <div col-md='3'>\u4F60\u5BF9\u516C\u53F8\u7684\u653F\u7B56\u3001\u5236\u5EA6\u3001\u6587\u5316\u7B49\u65B9\u9762\u6709\u4EC0\u4E48\u770B\u6CD5\u548C\u610F\u89C1\uFF1F</div>\n                                    <div col-md='10'><textarea id='content' class='form-control' disabled='disabled' style= 'width:100%;min-height:150px;'>" + (entity.EvaluationContent !== undefined ? entity.EvaluationContent : '') + "</textarea ></div>\n                                </div>\n                                <div class='row text-center'>\n                                    <a id='preva' href='SelfEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;<button disabled='disabled' type=\"button\" class=\"btn btn-primary\" id='btnSave'>\u4FDD\u5B58</button>&nbsp;&nbsp;<a id='nexta' href='SelfEvaluation1?i=" + examId + "'>\u4E0B\u4E00\u9875<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a>\n                                </div>\n                                </div>\n                            ";
                    }
                    else {
                        html =
                            "<div class='container'>\n                                <div class='row'>\n                                    <div col-md='3'>\u4F60\u5BF9\u516C\u53F8\u7684\u653F\u7B56\u3001\u5236\u5EA6\u3001\u6587\u5316\u7B49\u65B9\u9762\u6709\u4EC0\u4E48\u770B\u6CD5\u548C\u610F\u89C1\uFF1F</div>\n                                    <div col-md='10'><textarea id='content' class='form-control' style= 'width:100%;min-height:150px;'></textarea ></div>\n                                </div>\n                                <div class='row text-center'>\n                                    <a id='preva' href='SelfEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-primary\" id='btnSave'>\u4FDD\u5B58</button>&nbsp;&nbsp;<a id='nexta' href='SelfEvaluation1?i=" + examId + "' class='hideele'>\u4E0B\u4E00\u9875<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a>\n                                </div>\n                                </div>\n                             ";
                    }
                    _this.container.html(html);
                    var content = $("#content");
                    var preva = $("#preva");
                    var nexta = $("#nexta");
                    var btnSave = $("#btnSave");
                    preva.click(function (e) {
                        e.preventDefault();
                        if (content.val() && content.attr("disabled") !== "disabled") {
                            Q.confirm("数据未保存，您确认离开此页面吗？", function () {
                                window.location.href = preva.attr("href");
                            });
                        }
                        else {
                            window.location.href = preva.attr("href");
                        }
                    });
                    nexta.click(function (e) {
                        e.preventDefault();
                        if (content.val() && content.attr("disabled") !== "disabled") {
                            Q.confirm("数据未保存，您确认离开此页面吗？", function () {
                                window.location.href = nexta.attr("href");
                            });
                        }
                        else {
                            window.location.href = nexta.attr("href");
                        }
                    });
                    btnSave.click(function () {
                        if (!content.val()) {
                            Q.alert("内容不能为空");
                        }
                        else {
                            Q.confirm("确认提交吗，提交之后就不能再进行修改？", function () {
                                Evaluation.CompanyEvaluationService.AddCompanyEvaluation({
                                    ExamId: examId,
                                    UserId: userId,
                                    Content: content.val(),
                                }, function (response) {
                                    Q.notifySuccess("保存成功");
                                    btnSave.attr("disabled", "disabled");
                                    content.attr("disabled", "disabled");
                                    nexta.removeClass("hideele").addClass("showele");
                                });
                            });
                        }
                    });
                }));
            };
            return CompanyEvaluation;
        }());
        Evaluation.CompanyEvaluation = CompanyEvaluation;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var Evaluation1 = (function () {
            function Evaluation1(container) {
                //this.InitView(container);
                this.container = container;
            }
            Evaluation1.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var userId = parseInt(hr.Utils.getQueryString("p", window.location.href));
                //check 领导关系
                Evaluation.LeaderShipService.CheckCurrentUserIsParent({
                    UserId: userId
                }, function (response) {
                    if (response) {
                        var res = Evaluation.EvaluationItemService.GetEvaluation1ByExam({
                            ExamId: examId,
                            UserId: userId
                        }, function (response) {
                            console.log(response);
                            var grps = response.reduce(function (result, current) {
                                result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                                result[current.FirstKpiName].push(current);
                                return result;
                            }, {});
                            var html = "<table>\n                                <tr>\n                                    <th class='text-center' style='font-size:18px;' colspan='4'>\u5BF9&nbsp;&nbsp;<span style=\"color: #00a7d0\">" + $.cookie('evaluated_user') + "</span>&nbsp;&nbsp;\u8FDB\u884C\u8BC4\u4EF7</th>\n                                </tr>\n                                    <tr>\n                                        <td style='width:80px;'>\u8003\u6838\u9879\u76EE</td>\n                                        <td style='width:80px;'>\u8BC4\u4EF7\u5185\u5BB9</td>\n                                        <td style='min-width:400px;'>\u8BC4\u4EF7\u6807\u51C6</td>\n                                        <td style='width:80px;'>\u5F97\u5206</td>\n                                    </tr>\n                                ";
                            for (var pro in grps) {
                                //console.log(pro);
                                var subGrps = grps[pro].reduce(function (result, current) {
                                    result[current.SecondKpiName] = result[current.SecondKpiName] || [];
                                    result[current.SecondKpiName].push(current);
                                    return result;
                                }, {});
                                console.log(subGrps);
                                var subKeys = [];
                                for (var subpro in subGrps) {
                                    subKeys.push(subpro);
                                }
                                var toprowpan = subKeys.length;
                                var colspan = 5;
                                var i = 0;
                                for (var subpro in subGrps) {
                                    var subarr = subGrps[subpro];
                                    html += '<tr>';
                                    if (i === 0) {
                                        html += "<td rowspan='" + toprowpan + "' style='vertical-align: middle;width:80px'>" + pro + "</td>";
                                    }
                                    i++;
                                    html += "<td>" + subpro + "</td>";
                                    $.each(subarr, function (index, value) {
                                        html += "<td><textarea class='form-control' style='width:100%;min-height:100px;' type='text'>" + (value.InputContent !== undefined ? value.InputContent : value.Content) + "</textarea></td>";
                                        if (value.FScore) {
                                            html += "<td><input disabled='disabled' data-itemid='" + value.Id + "' data-maxscore='" + value.Score + "' class='form-control success' type=\"number\" max=\"" + value.Score + "\" min=\"0\" value='" + value.FScore + "' /></td></tr>";
                                        }
                                        else {
                                            html += "<td><input  data-itemid='" + value.Id + "' data-maxscore='" + value.Score + "' class='form-control' type=\"number\" max=\"" + value.Score + "\" min=\"0\" /></td></tr>";
                                        }
                                    });
                                }
                            }
                            html += "<tr><td colspan='4' class='text-center'><a id='preva' href='SelfEvaluation1?i=" + examId + "&p=" + userId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;&nbsp;<button id='btnSave' type=\"button\" class=\"btn btn-primary hidden\" id='btnSave'>\u4FDD\u5B58</button>&nbsp;&nbsp;&nbsp;<a id='nexta' href='Evaluation2?i=" + examId + "&p=" + userId + "'>\u4E0B\u4E00\u9875<i class='fa fa-arrow-right' aria-hidden='true'></i></a></td><tr></table>";
                            _this.container.html(html);
                            var nexta = $('#nexta');
                            var preva = $('#preva');
                            var btn = $('#btnSave');
                            var area = $("textarea.form-control");
                            nexta.attr('href', "Evaluation2?i=" + examId + "&p=" + userId);
                            var inputScore = $('input[type="number"].form-control');
                            inputScore.change(function (e) {
                                var obj = $(e.target);
                                var maxscore = obj.data('maxscore');
                                console.log(maxscore);
                                if (obj.val() > maxscore) {
                                    Q.notifyError("\u6253\u5206\u4E0D\u80FD\u8D85\u8FC7\u6700\u5927\u7684\u5206\u503C\uFF1A" + maxscore);
                                    obj.val(maxscore);
                                    obj.focus();
                                    return;
                                }
                            });
                            var arr = [];
                            inputScore.each(function (index, ele) {
                                arr.push(ele);
                            });
                            if (Q.any(arr, function (p) { return !$(p).hasClass('success'); })) {
                                btn.removeClass('hidden');
                            }
                            preva.click(function (e) {
                                e.preventDefault();
                                if (Q.any(arr, function (p) { return !Q.isEmptyOrNull($(p).val()); }) && Q.any(arr, function (p) { return !$(p).hasClass('success'); })) {
                                    Q.confirm('数据未保存，您确认离开此页面吗？', function () {
                                        window.location.href = preva.attr('href');
                                    });
                                }
                                else {
                                    window.location.href = preva.attr('href');
                                }
                            });
                            nexta.click(function (e) {
                                e.preventDefault();
                                if (Q.any(arr, function (p) { return !Q.isEmptyOrNull($(p).val()); }) && Q.any(arr, function (p) { return !$(p).hasClass('success'); })) {
                                    Q.confirm('数据未保存，您确认离开此页面吗？', function () {
                                        window.location.href = nexta.attr('href');
                                    });
                                }
                                else {
                                    window.location.href = nexta.attr('href');
                                }
                            });
                            btn.click(function (e) {
                                console.log(arr);
                                if (Q.any(arr, function (p) { return Q.isEmptyOrNull($(p).val()); })) {
                                    Q.notifyError('还有未评分的项目');
                                    return;
                                }
                                else {
                                    var entities_1 = [];
                                    arr.forEach(function (ele, index) {
                                        console.log(area.eq(index).val());
                                        entities_1.push({
                                            EvaluationItemId: $(ele).data('itemid'),
                                            ExamId: examId,
                                            UserId: userId,
                                            Score: parseInt($(ele).val()),
                                            InputContent: (area.eq(index)).val()
                                        });
                                    });
                                    console.log(entities_1);
                                    hr.Evaluation.EvaluationResultDetailService.Add({
                                        Entities: entities_1,
                                        IsComplete: false
                                    }, function (response) {
                                        Q.notifySuccess('保存成功！');
                                        //inputScore.attr('disabled', 'disabled');
                                        inputScore.addClass('success');
                                        btn.addClass('hidden');
                                    });
                                }
                            });
                        });
                    }
                    else {
                        window.location.href = "Evaluation2?i=" + examId + "&p=" + userId;
                    }
                });
            };
            return Evaluation1;
        }());
        Evaluation.Evaluation1 = Evaluation1;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var Evaluation2 = (function () {
            function Evaluation2(container) {
                //this.InitView(container);
                this.container = container;
            }
            Evaluation2.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var userId = parseInt(hr.Utils.getQueryString("p", window.location.href));
                var res = Evaluation.EvaluationItemService.GetEvaluation2ByExam({
                    ExamId: examId,
                    UserId: userId
                }, function (response) {
                    var grps = response.reduce(function (result, current) {
                        result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                        result[current.FirstKpiName].push(current);
                        return result;
                    }, {});
                    var html = "<table>\n                                <tr>\n                                    <th class='text-center' style='font-size:18px;' colspan='7'>\u5BF9&nbsp;&nbsp;<span style=\"color:#00a7d0\">" + $.cookie('evaluated_user') + "</span>&nbsp;&nbsp;\u8FDB\u884C\u8BC4\u4EF7</th>\n                                </tr>\n                                    <tr>\n                                        <td style='width:80px;'>\u8003\u6838\u9879\u76EE</td>\n                                        <td style='width:80px;'>\u8BC4\u4EF7\u5185\u5BB9</td>\n                                        <td colspan='5' style='min-width:400px;'>\u8BC4\u4EF7\u6807\u51C6</td>\n                                    </tr>\n                                ";
                    var subarr;
                    var toprowpan;
                    var subGrps;
                    var totalRows = 0;
                    for (var pro in grps) {
                        //console.log(pro);
                        subGrps = grps[pro].reduce(function (result, current) {
                            result[current.SecondKpiName] = result[current.SecondKpiName] || [];
                            result[current.SecondKpiName].push(current);
                            return result;
                        }, {});
                        var subKeys = [];
                        for (var subpro in subGrps) {
                            subKeys.push(subpro);
                        }
                        toprowpan = subKeys.length;
                        totalRows += toprowpan;
                        var colspan = 5;
                        var i = 0;
                        for (var subpro in subGrps) {
                            subarr = subGrps[subpro];
                            html += '<tr class="text-notdone">';
                            if (i === 0) {
                                html += "<td rowspan='" + toprowpan + "' style='vertical-align: middle;width:80px'>" + pro + "</td>";
                            }
                            i++;
                            html += "<td style='vertical-align:middle;'>" + subpro + "</td>";
                            $.each(subarr, function (index, value) {
                                if (value.FScore) {
                                    html += "<td style='vertical-align:bottom;'><label style=\"font-weight: normal\">" + value.Content + "(<span style='color: #1a2d27;'>" + value.Score + "\u5206</span>)<br/><input data-itemid='" + value.Id + "' type=\"radio\" checked='checked' name='" + value.SecondKpiName + "' value='" + value.Score + "' style='width:100%'/></label>  </td>";
                                }
                                else {
                                    html += "<td style='vertical-align:bottom;'><label style=\"font-weight: normal\">" + value.Content + "(<span style='color: #1a2d27;'>" + value.Score + "\u5206</span>)<br/><input data-itemid='" + value.Id + "' type=\"radio\" name='" + value.SecondKpiName + "' value='" + value.Score + "' style='width:100%'/></label> </td>";
                                }
                            });
                        }
                    }
                    html += "<tr><td colspan='7' class='text-center'><a id='preva' href='Evaluation1?i=" + examId + "&p=" + userId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;&nbsp;<button id='btnSave' type=\"button\" class=\"btn btn-primary\" id='btnSave'>\u4FDD\u5B58</button></td><tr></table>";
                    _this.container.html(html);
                    var btnSave = $("#btnSave");
                    var radio = $("input[type='radio']");
                    var preva = $('#preva');
                    var checkedRd = $("input[type='radio']:checked");
                    //已经评价过之后就不能再修改
                    if (checkedRd.length !== 0) {
                        radio.attr('disabled', 'disabled');
                        btnSave.addClass('hidden');
                    }
                    checkedRd.each(function (index, ele) {
                        $(ele).parent().parent().parent().removeClass("text-notdone").addClass("text-done");
                    });
                    btnSave.click(function (e) {
                        //console.log(subarr);
                        checkedRd = $("input[type='radio']:checked");
                        if (checkedRd.length < totalRows) {
                            Q.notifyError('还有未评价的项目，请评价完整后再进行保存');
                            return;
                        }
                        else {
                            var entities_2 = [];
                            checkedRd.each(function (index, ele) {
                                entities_2.push({
                                    EvaluationItemId: $(ele).data('itemid'),
                                    ExamId: examId,
                                    UserId: userId,
                                    Score: parseInt($(ele).val())
                                });
                            });
                            Q.confirm('您确认提交保存吗,保存之后就不能再修改', function () {
                                hr.Evaluation.EvaluationResultDetailService.Add({
                                    Entities: entities_2,
                                    IsComplete: true
                                }, function (response) {
                                    Q.notifySuccess("\u60A8\u5DF2\u5B8C\u6210\u5BF9" + $.cookie('evaluated_user') + "\u7684\u8BC4\u4F30\uFF01");
                                    radio.attr('disabled', 'disabled');
                                    btnSave.addClass('hidden');
                                });
                            });
                        }
                    });
                    var prt;
                    radio.change(function (e) {
                        prt = $(e.target).parent().parent().parent();
                        if (prt.hasClass('text-notdone')) {
                            $(e.target).parent().parent().parent().removeClass("text-notdone").addClass("text-done");
                        }
                    });
                    preva.click(function (e) {
                        e.preventDefault();
                        var disabledRadio = $("input[type='radio']:disabled");
                        if ($("input[type='radio']:checked").length > 0 && disabledRadio.length === 0) {
                            Q.confirm('数据未保存，您确认离开此页面吗？', function () {
                                //window.location.href = preva.attr('href');
                                //进入上一页之前判断领导关系
                                _this.CheckCurrentUserIsParent(userId, examId, preva);
                            });
                        }
                        else {
                            //window.location.href = preva.attr('href');
                            _this.CheckCurrentUserIsParent(userId, examId, preva);
                        }
                    });
                });
            };
            Evaluation2.prototype.CheckCurrentUserIsParent = function (userId, examId, preva) {
                //进入下一页之前判断领导关系
                Evaluation.LeaderShipService.CheckCurrentUserIsParent({
                    UserId: userId
                }, (function (response) {
                    if (response) {
                        window.location.href = preva.attr('href');
                    }
                    else {
                        window.location.href = "SelfEvaluation1?i=" + examId + "&p=" + userId;
                    }
                }));
            };
            return Evaluation2;
        }());
        Evaluation.Evaluation2 = Evaluation2;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SelfEvaluation = (function () {
            function SelfEvaluation(container) {
                //this.InitView(container);
                this.container = container;
            }
            //TODO: 考虑评估过期的情况
            SelfEvaluation.prototype.init = function () {
                var _this = this;
                //console.log(Utils.getCurrentUserId());
                hr.Evaluation.ToDoListService.GetCurrentUserId(null, function (userId) {
                    var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                    Evaluation.EvaluationItemService.GetSelfEvaluationByExam({ ExamId: examId, UserId: userId }, function (response) {
                        var html = "<table>\n                                   <tr>\n                                        <th colspan='5' class='text-center' style='font-size:18px'>\n                                            \u81EA\u6211\u8BC4\u4EF7 &nbsp;&nbsp;&nbsp;<span id='saveMsg' style='display: none; color: green'>\u5DF2\u4FDD\u5B58</span>\n                                        </th>\n                                    </tr>\n                                ";
                        if (response !== null && response.Items !== null) {
                            var count_2 = response.Items.length;
                            if (response.Items.length !== 0) {
                                response.Items.forEach(function (item, index) {
                                    html += "<tr>";
                                    if (index == 0) {
                                        html += "<td rowspan='" + count_2 + "' style='vertical-align: middle;width:80px'><p>" + item
                                            .FirstKpiName + "</p></td>";
                                    }
                                    html += "<td width='80px'><p>" + item.SecondKpiName + "</p></td>\n                                    <td width='150px'><p>" + item.Content + "</p></td>";
                                    if (item.ContentType === 1) {
                                        //输入框
                                        html += "<td>" + item.Mark + "<br/><textarea data-itemid='" + item.Id + "' class='form-control' style= 'width:100%;min-height:150px;'>" + (item.InputContent !== undefined ? item.InputContent : '') + "</textarea></td>";
                                    }
                                    //html += `<td style='width:150px;'><small>${item.Remark}</small></td>`;
                                    html += "</tr>";
                                });
                                html +=
                                    "<tr><td colspan='5' class='text-center'><button type=\"button\" class=\"btn btn-primary\">\u63D0\u4EA4</button>&nbsp;&nbsp;&nbsp;<a href='CompanyEvaluation?i=" + examId + "&p=" + userId + "' id='nexta' class='hideele'>\u4E0B\u4E00\u9875<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a></td><tr></table>";
                            }
                            else {
                                html += "<tr><td colspan='5'>管理员未添加或启用您的自我评价内容</td></tr>";
                                html += "<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1?i=" + examId + "'>\u4E0B\u4E00\u9875<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a></td><tr></table>";
                            }
                        }
                        else {
                            html += "<tr><td colspan='5'>管理员未添加或启用您的自我评价内容</td></tr>";
                            html += "<tr><td colspan='5' class='text-center'><a href='SelfEvaluation1?i=" + examId + "'>\u4E0B\u4E00\u9875<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a></td><tr></table>";
                        }
                        _this.container.html(html);
                        _this.saveMsg = $("#saveMsg");
                        _this.saveBtn = $("button.btn-primary");
                        _this.inputs = $("textarea.form-control");
                        //判断是否所有的input都有内容，如果是，则说明已经进行过提交了，不能再进行编辑了
                        if (response.IsSelfEvaluated) {
                            _this.inputs.attr('disabled', 'disabled');
                        }
                        _this.nexta = $("#nexta");
                        if (_this.inputs.attr("disabled") === "disabled") {
                            _this.nexta.removeClass('hideele').addClass('showele');
                            _this.saveBtn.addClass('hideele');
                        }
                        _this.saveBtn.click(function (e) {
                            var flag = true;
                            _this.inputs.each(function (index, ele) {
                                //console.log($(ele).val().length);
                                if (Q.isEmptyOrNull($(ele).val())) {
                                    //console.log("empty");
                                    Q.notifyError("请将自我评价填写完整");
                                    flag = false;
                                    return;
                                }
                            });
                            if (!flag) {
                                return;
                            }
                            Q.confirm("提交自我评价的内容吗?,一旦提交将不能进行修改", function () {
                                _this.saveData(userId, examId);
                            });
                        });
                        var count = 0;
                        _this.inputs.on('keydown', function (e) {
                            count++;
                            //每一次需要输入两个字才会去保存
                            if (count > 2) {
                                count = 0;
                                setTimeout(function () {
                                    _this.saveData(userId, examId, $(e.target));
                                }, 1000);
                            }
                        });
                    });
                });
            };
            //保存自我评价的内容
            SelfEvaluation.prototype.saveData = function (userId, examId, currentInput) {
                var _this = this;
                if (currentInput === void 0) { currentInput = null; }
                var obj = new Object();
                obj['UserId'] = userId;
                obj['ExamId'] = examId;
                hr.Evaluation.UserToUserViewService.List({
                    EqualityFilter: obj
                }, function (res) {
                    var arr = [];
                    if (currentInput !== null) {
                        res.Entities.forEach(function (item, i) {
                            arr.push({
                                UserId: userId,
                                ExamId: examId,
                                InputContent: currentInput.val(),
                                EvaluationItemId: currentInput.data("itemid"),
                                EvaluationUserId: item.EvaluationUserId,
                            });
                        });
                    }
                    else {
                        res.Entities.forEach(function (item, i) {
                            _this.inputs.each(function (index, ele) {
                                var tmpEle = $(ele);
                                arr.push({
                                    UserId: userId,
                                    ExamId: examId,
                                    InputContent: tmpEle.val(),
                                    EvaluationItemId: tmpEle.data("itemid"),
                                    EvaluationUserId: item.EvaluationUserId
                                });
                            });
                        });
                    }
                    hr.Evaluation.EvaluationResultDetailService.Add({
                        Entities: arr,
                        IsComplete: false,
                        IsSelfEvaluationComplete: currentInput == null ? true : false
                    }, function (response) {
                        if (currentInput === null) {
                            Q.notifySuccess("提交成功");
                            _this.nexta.removeClass("hideele").addClass("showele");
                            _this.saveBtn.addClass('hideele');
                            _this.inputs.attr('disabled', 'disabled');
                        }
                        else {
                            _this.saveMsg.fadeIn(1000).fadeOut(3000);
                        }
                    });
                });
            };
            return SelfEvaluation;
        }());
        Evaluation.SelfEvaluation = SelfEvaluation;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SelfEvaluation1 = (function () {
            function SelfEvaluation1(container) {
                //this.InitView(container);
                this.container = container;
            }
            SelfEvaluation1.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var userId = parseInt(hr.Utils.getQueryString("p", window.location.href));
                Evaluation.EvaluationItemService.GetUserToUsers(null, function (users) {
                    //console.log(users);
                    var ht = "<select class=\"form-control\" id='sltUsers'><option value='0'>\u8BF7\u9009\u62E9\u8981\u8BC4\u4EF7\u7684\u4EBA</option>";
                    $.each(users, function (index, value) {
                        if (value.HasEvaluated) {
                            ht += "<option value='" + value.UserId + "'>" + value.Username + "(\u5DF2\u8BC4\u4EF7)</option>";
                        }
                        else {
                            ht += "<option value='" + value.UserId + "'>" + value.Username + "</option>";
                        }
                    });
                    if (userId) {
                        ht += "</select>\n                        <div class='row' id='evaluationContent'>\n                            <p class='bg-danger text-center'>\u8BF7\u9009\u62E9\u9700\u8981\u8BC4\u4EF7\u7684\u4EBA\uFF0C\u5426\u5219\u4E0D\u80FD\u8FDB\u884C\u4E0B\u4E00\u6B65\u7684\u64CD\u4F5C</p>\n                        </div>\n                        <div class=\"text-center\"><a id='preva' href='CompanyEvaluation?i=" + examId + "&p=" + userId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-primary hideele\" id='btnSave'>\u4FDD\u5B58</button>&nbsp;&nbsp;<a id='nexta' href='Evaluation1?i=" + examId + "' class='hideele'>\u4E0B\u4E00\u9875<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a></div> \n                        ";
                    }
                    else {
                        ht += "</select>\n                        <div class='row' id='evaluationContent'>\n                            <p class='bg-danger text-center'>\u8BF7\u9009\u62E9\u9700\u8981\u8BC4\u4EF7\u7684\u4EBA\uFF0C\u5426\u5219\u4E0D\u80FD\u8FDB\u884C\u4E0B\u4E00\u6B65\u7684\u64CD\u4F5C</p>\n                        </div>\n                        <div class=\"text-center\"><a id='preva' href='SelfEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-primary hideele\" id='btnSave'>\u4FDD\u5B58</button>&nbsp;&nbsp;<a id='nexta' href='Evaluation1?i=" + examId + "' class='hideele'>\u4E0B\u4E00\u9875<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a></div> \n                        ";
                    }
                    _this.container.html(ht);
                    var sltUsers = $('#sltUsers');
                    sltUsers.change(function () {
                        _this.onSelectChange(examId, sltUsers);
                    });
                    console.log(userId);
                    if (userId) {
                        sltUsers.val(userId);
                        _this.onSelectChange(examId, sltUsers);
                    }
                });
            };
            SelfEvaluation1.prototype.onSelectChange = function (examId, sltUsers) {
                var nexta = $('#nexta');
                var preva = $('#preva');
                var btn = $('#btnSave');
                var evaluationContent = $('#evaluationContent');
                var html = '';
                if (sltUsers.val() === '0') {
                    html += "<p class='bg-danger text-center'>\u8BF7\u9009\u62E9\u9700\u8981\u8BC4\u4EF7\u7684\u4EBA\uFF0C\u5426\u5219\u4E0D\u80FD\u8FDB\u884C\u4E0B\u4E00\u6B65\u7684\u64CD\u4F5C</p>";
                    evaluationContent.html(html);
                    btn.addClass('hideele');
                    nexta.addClass('hideele');
                    return;
                }
                var res = Evaluation.EvaluationItemService.GetSelfEvaluation1ByExam({
                    ExamId: examId,
                    UserId: sltUsers.val()
                }, function (response) {
                    if (response !== null) {
                        var count_3 = res.responseJSON.length;
                        //console.log(res.responseJSON);
                        if (res.responseJSON.length !== 0) {
                            if (Q.any(res.responseJSON, function (p) { return Q.isEmptyOrNull(p['InputContent']); })) {
                                html += "<p class='bg-danger text-center'>" + sltUsers.children("option:selected").text() + "\u540C\u5FD7\u8FD8\u672A\u8FDB\u884C\u8FC7\u81EA\u6211\u8BC4\u4EF7\uFF0C\u5728\u5176\u8FDB\u884C\u81EA\u6211\u8BC4\u4EF7\u4E4B\u540E\uFF0C\u624D\u80FD\u8FDB\u884C\u4E0B\u4E00\u6B65\u7684\u64CD\u4F5C</p>";
                                evaluationContent.html(html);
                                $('#nexta').removeClass('hideele').removeClass('showele').addClass('hideele');
                                return;
                            }
                            html += "<table>\n                                    <tr>\n                                        <th class='text-center' style='font-size:18px;' colspan='6'>\n                                            \u5BF9&nbsp;&nbsp;<span style=\"color:#00a7d0\">" + sltUsers.children("option:selected").text() + "</span>&nbsp;&nbsp;\u8FDB\u884C\u8BC4\u4EF7\n                                        </th>\n                                     </tr>\n                                    <tr>\n                                        <td style='width:80px;'><strong>\u8003\u6838\u9879\u76EE</strong></td>\n                                        <td style='width:80px;'><strong>\u8BC4\u4EF7\u5185\u5BB9</strong></td>\n                                        <td colspan='2' style='min-width:400px;'><strong>\u8BC4\u4EF7\u6807\u51C6(\u88AB\u8BC4\u4EBA\u7684\u81EA\u6211\u8BC4\u4EF7)</strong></td>\n                                        <td style='width:120px;'><strong>\u5F97\u5206(\u53C2\u8BC4\u4EBA\u8BC4\u4EF7)</strong></td>\n                                        <td style='width:150px;'><strong>\u5907\u6CE8</strong></td>\n                                    </tr>\n                                ";
                            res.responseJSON.forEach(function (item, index) {
                                html += "<tr>";
                                if (index === 0) {
                                    html += "<td rowspan='" + count_3 + "' style='vertical-align: middle;width:80px'><p>" + item
                                        .FirstKpiName + "</p></td>";
                                }
                                html += "<td width='80px'><p>" + item.SecondKpiName + "</p></td>\n                                    <td width='150px'><p>" + item.Content + "</p></td>";
                                if (item.ContentType === 1) {
                                    //输入框
                                    html += "<td>" + item.Mark + "<textarea data-itemid='" + item.Id + "' disabled='disabled' class='form-control' style= 'width:100%;min-height:150px;'>" + (item.InputContent === undefined ? '' : item.InputContent) + "</textarea></td>";
                                }
                                if (item.FScore) {
                                    html += "<td><input disabled='disabled' data-itemid='" + item.Id + "' data-maxscore='" + item.Score + "' class='form-control success' type=\"number\" max=\"" + item.Score + "\" min=\"0\" value='" + item.FScore + "' /></td><td><small>" + item.Remark + "</small></td></tr>";
                                }
                                else {
                                    html += "<td><input  data-itemid='" + item.Id + "' data-maxscore='" + item.Score + "' class='form-control' type=\"number\" max=\"" + item.Score + "\" min=\"0\" /></td><td><small>" + item.Remark + "</small></td></tr>";
                                }
                            });
                        }
                    }
                    evaluationContent.html(html);
                    nexta.removeClass('hideele').addClass('showele').attr('href', "Evaluation1?i=" + examId + "&p=" + sltUsers.val());
                    var inputScore = $('input[type="number"].form-control');
                    inputScore.change(function (e) {
                        var obj = $(e.target);
                        console.log(e);
                        var maxscore = obj.data('maxscore');
                        console.log(maxscore);
                        if (obj.val() > maxscore) {
                            Q.notifyError("\u6253\u5206\u4E0D\u80FD\u8D85\u8FC7\u6700\u5927\u7684\u5206\u503C\uFF1A" + maxscore);
                            obj.val(maxscore);
                            obj.focus();
                            return;
                        }
                    });
                    var arr = [];
                    inputScore.each(function (index, ele) {
                        arr.push(ele);
                    });
                    if (Q.any(arr, function (p) { return !$(p).hasClass('success'); })) {
                        btn.removeClass('hideele');
                    }
                    preva.click(function (e) {
                        e.preventDefault();
                        if (Q.any(arr, function (p) { return !Q.isEmptyOrNull($(p).val()); }) && Q.any(arr, function (p) { return !$(p).hasClass('success'); })) {
                            Q.confirm('数据未保存，您确认离开此页面吗？', function () {
                                window.location.href = preva.attr('href');
                            });
                        }
                        else {
                            window.location.href = preva.attr('href');
                        }
                    });
                    nexta.click(function (e) {
                        e.preventDefault();
                        if (Q.any(arr, function (p) { return !Q.isEmptyOrNull($(p).val()); }) && Q.any(arr, function (p) { return !$(p).hasClass('success'); })) {
                            Q.confirm('数据未保存，您确认离开此页面吗？', function () {
                                $.cookie('evaluated_user', sltUsers.children("option:selected").text(), { path: '/' });
                                //进入下一页之前判断领导关系
                                Evaluation.LeaderShipService.CheckCurrentUserIsParent({
                                    UserId: parseInt(sltUsers.val())
                                }, function (response) {
                                    if (response) {
                                        window.location.href = nexta.attr('href');
                                    }
                                    else {
                                        window.location.href = "Evaluation2?i=" + examId + "&p=" + sltUsers.val();
                                    }
                                });
                            });
                        }
                        else {
                            $.cookie('evaluated_user', sltUsers.children("option:selected").text(), { path: '/' });
                            Evaluation.LeaderShipService.CheckCurrentUserIsParent({
                                UserId: parseInt(sltUsers.val())
                            }, function (response) {
                                console.log(response);
                                if (response) {
                                    window.location.href = nexta.attr('href');
                                }
                                else {
                                    window.location.href = "Evaluation2?i=" + examId + "&p=" + sltUsers.val();
                                }
                            });
                        }
                    });
                    btn.click(function (e) {
                        //console.log(arr);
                        if (Q.any(arr, function (p) { return Q.isEmptyOrNull($(p).val()); })) {
                            Q.notifyError('还有未评分的项目');
                            return;
                        }
                        else {
                            var entities_3 = [];
                            arr.forEach(function (ele, index) {
                                entities_3.push({
                                    EvaluationItemId: $(ele).data('itemid'),
                                    ExamId: examId,
                                    UserId: parseInt(sltUsers.val()),
                                    Score: parseInt($(ele).val())
                                });
                            });
                            //console.log(entities);
                            hr.Evaluation.EvaluationResultDetailService.Add({
                                Entities: entities_3,
                                IsComplete: false
                            }, function (response) {
                                Q.notifySuccess('保存成功！');
                                //inputScore.attr('disabled', 'disabled');
                                inputScore.addClass('success').attr('disabled', 'disabled');
                                btn.addClass('hideele');
                            });
                        }
                    });
                });
            };
            return SelfEvaluation1;
        }());
        Evaluation.SelfEvaluation1 = SelfEvaluation1;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationFinalResultDetail = (function (_super) {
            __extends(EvaluationFinalResultDetail, _super);
            function EvaluationFinalResultDetail(userId, examId) {
                var _this = _super.call(this) || this;
                _this.userId = userId;
                _this.examId = examId;
                return _this;
            }
            EvaluationFinalResultDetail.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                //Evaluation.EvaluationItemService.List({}, response => {
                //    this.examList = new EvaluationItemGrid($("#div").first()).init();
                //    let selectedKeys = $("[name='EvaluationIds']").val().split(',');
                //    this.examList.rowSelection.selectKeys(selectedKeys);
                //    Q.initFullHeightGridPage($('#div'));
                //})
                this.detailGrid = new Evaluation.EvaluationResultViewGrid($("#div").first(), this.userId, this.examId).init();
                //let selectedKeys = $("[name='EvaluationIds']").val().split(',');
                //this.examList.rowSelection.selectKeys(selectedKeys);
                Q.initFullHeightGridPage($('#div'));
            };
            EvaluationFinalResultDetail.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='div' style='height:500px;'></div>";
            };
            EvaluationFinalResultDetail.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = '考核结果详情';
                opt.buttons = [
                    //{
                    //    text: "Ok",
                    //    showText: "Ok",
                    //    click: () => {
                    //        //Q.notifyInfo("ok");
                    //        //console.log(this.examList.rowSelection.getSelectedKeys());
                    //        let selectedItems = this.examList.rowSelection.getSelectedKeys();
                    //        if (selectedItems.length == 0) {
                    //            Q.notifyWarning("请选择要发布的考核项");
                    //            return;
                    //        }
                    //        $("[name='EvaluationIds']").val(this.examList.rowSelection.getSelectedKeys().join(','));
                    //        this.dialogClose();
                    //    }
                    //},
                    {
                        text: "Cancel",
                        showText: "Cancel",
                        click: function () {
                            //Q.notifyInfo("cancel");
                            _this.dialogClose();
                        }
                    }
                ];
                return opt;
            };
            return EvaluationFinalResultDetail;
        }(Serenity.TemplatedDialog));
        EvaluationFinalResultDetail = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], EvaluationFinalResultDetail);
        Evaluation.EvaluationFinalResultDetail = EvaluationFinalResultDetail;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationFinalResultGrid = (function (_super) {
            __extends(EvaluationFinalResultGrid, _super);
            function EvaluationFinalResultGrid(container) {
                return _super.call(this, container) || this;
            }
            EvaluationFinalResultGrid.prototype.getColumnsKey = function () { return 'Evaluation.EvaluationFinalResult'; };
            //protected getDialogType() { return EvaluationFinalResultDialog; }
            EvaluationFinalResultGrid.prototype.getLocalTextPrefix = function () { return Evaluation.EvaluationFinalResultRow.localTextPrefix; };
            EvaluationFinalResultGrid.prototype.getService = function () { return Evaluation.EvaluationFinalResultService.baseUrl; };
            EvaluationFinalResultGrid.prototype.getIdProperty = function () { return Evaluation.DepartmentRow.idProperty; };
            EvaluationFinalResultGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.push(hr.Common.ExcelExportHelper.createToolButton({
                    title: '导出Excel',
                    hint: '导出Excel',
                    grid: this,
                    service: Evaluation.EvaluationFinalResultService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(hr.Common.ExcelExportHelper.createToolButton({
                    title: '导出考核明细',
                    hint: '导出考核明细',
                    grid: this,
                    service: Evaluation.EvaluationFinalResultService.baseUrl + '/ListDetailExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                //buttons.push({
                //    title: '一键归档',
                //    cssClass: 'add-file-button',
                //    onClick: () => {
                //    }
                //});
                //buttons.push(Common.ExcelExportHelper.createToolButton({
                //    title: '导出自我评价',
                //    hint: '导出自我评价',
                //    grid: this,
                //    service: EvaluationFinalResultService.baseUrl + '/ListSelfEvaluationExcel',
                //    onViewSubmit: () => this.onViewSubmit(),
                //    separator: true
                //}));
                return buttons;
            };
            EvaluationFinalResultGrid.prototype.getColumns = function () {
                //super.getQuickFilters();
                var columns = _super.prototype.getColumns.call(this);
                var flds = Evaluation.EvaluationFinalResultRow.Fields;
                var index = 0;
                Q.first(columns, function (x) { return x.field === flds.UserName; })
                    .format = function (ctx) {
                    //TODO: 考虑过期的情况
                    return "<a href='#' class='check_detail'>" + ctx.value + "</a>";
                };
                return columns;
            };
            EvaluationFinalResultGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            EvaluationFinalResultGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            EvaluationFinalResultGrid.prototype.onClick = function (e, row, cell) {
                var target = $(e.target);
                var rst = this.itemAt(row);
                if (target.hasClass("check_detail")) {
                    new Evaluation.EvaluationFinalResultDetail(rst.UserId, rst.ExamId).dialogOpen();
                }
            };
            EvaluationFinalResultGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                if (hr.Authorization.userDefinition.IsAdmin) {
                    return filters;
                }
                if (hr.Authorization.hasPermission("Evaluation:Users:LookupScript") && !hr.Authorization.hasPermission("Administration:Security")) {
                    var fld_2 = Evaluation.EvaluationFinalResultRow.Fields;
                    if (hr.Authorization.userDefinition.DepartmentName) {
                        Q.first(filters, function (x) { return x.field === fld_2.DepartmentName; }).init = function (w) {
                            var editor = w;
                            editor.value = hr.Authorization.userDefinition.DepartmentName.toString();
                            editor.element.attr("disabled", "disabled");
                        };
                        return filters.filter(function (x) { return x.field !== fld_2.UserName; });
                    }
                }
                return filters;
            };
            return EvaluationFinalResultGrid;
        }(Serenity.EntityGrid));
        EvaluationFinalResultGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EvaluationFinalResultGrid);
        Evaluation.EvaluationFinalResultGrid = EvaluationFinalResultGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemDialog = (function (_super) {
            __extends(EvaluationItemDialog, _super);
            function EvaluationItemDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.EvaluationItemForm(_this.idPrefix);
                return _this;
            }
            EvaluationItemDialog.prototype.getFormKey = function () { return Evaluation.EvaluationItemForm.formKey; };
            EvaluationItemDialog.prototype.getIdProperty = function () { return Evaluation.EvaluationItemRow.idProperty; };
            EvaluationItemDialog.prototype.getLocalTextPrefix = function () { return Evaluation.EvaluationItemRow.localTextPrefix; };
            EvaluationItemDialog.prototype.getNameProperty = function () { return Evaluation.EvaluationItemRow.nameProperty; };
            EvaluationItemDialog.prototype.getService = function () { return Evaluation.EvaluationItemService.baseUrl; };
            EvaluationItemDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            EvaluationItemDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                //var suffix = ' (Clone)';
                //if (!Q.endsWith(clone.Content || '', suffix)) {
                //    clone.Content = (clone.Content || '') + suffix;
                //}
                clone.Content = '';
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.OrderNo = clone.OrderNo + 1;
                clone.Score = clone.Score + 1;
                return clone;
            };
            return EvaluationItemDialog;
        }(Serenity.EntityDialog));
        EvaluationItemDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive(),
            Serenity.Decorators.maximizable()
        ], EvaluationItemDialog);
        Evaluation.EvaluationItemDialog = EvaluationItemDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemGrid = (function (_super) {
            __extends(EvaluationItemGrid, _super);
            function EvaluationItemGrid(container) {
                return _super.call(this, container) || this;
            }
            EvaluationItemGrid.prototype.getColumnsKey = function () { return 'Evaluation.EvaluationItem'; };
            EvaluationItemGrid.prototype.getDialogType = function () { return Evaluation.EvaluationItemDialog; };
            EvaluationItemGrid.prototype.getIdProperty = function () { return Evaluation.EvaluationItemRow.idProperty; };
            EvaluationItemGrid.prototype.getLocalTextPrefix = function () { return Evaluation.EvaluationItemRow.localTextPrefix; };
            EvaluationItemGrid.prototype.getService = function () { return Evaluation.EvaluationItemService.baseUrl; };
            EvaluationItemGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            EvaluationItemGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: '按第一指标分组',
                    cssClass: 'expand-all-button',
                    onClick: function () {
                        _this.view.setGrouping([{
                                formatter: function (x) { return '第一指标: ' + x.value + ' (' + x.count + ' 项)'; },
                                getter: 'FirstKpiName'
                            }]);
                    }
                }, {
                    title: '按第二指标分组',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return '第一指标: ' + x.value + ' (' + x.count + ' 项)'; },
                            getter: 'FirstKpiName'
                        },
                        {
                            formatter: function (x) { return '第二指标: ' + x.value + ' (' + x.count + ' 项)'; },
                            getter: 'SecondKpiName'
                        }
                    ]); }
                }, {
                    title: '不分组',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                buttons.push({
                    title: '删除选中项',
                    //cssClass: 'btn btn-danger',
                    onClick: function () {
                        var selectedKeys = _this.rowSelection.getSelectedKeys();
                        if (selectedKeys.length == 0) {
                            _this.rowSelection.selectKeys(["1", "2"]);
                        }
                        //console.log(this.rowSelection.getSelectedKeys();
                    }
                });
                return buttons;
            };
            EvaluationItemGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            EvaluationItemGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            EvaluationItemGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'Copy',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action copy-row" title="copy"><i class="fa fa-clone" aria-hidden="true"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            EvaluationItemGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            Evaluation.EvaluationItemService.Delete({
                                EntityId: item.Id,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('copy-row')) {
                        var dialog = new Evaluation.EvaluationItemDialog();
                        this.initDialog(dialog);
                        dialog.loadEntityAndOpenDialog({
                            FirstKpiId: item.FirstKpiId,
                            SecondKpiId: item.SecondKpiId,
                            ContentType: item.ContentType,
                            Score: item.Score + 1,
                            IsEnabled: item.IsEnabled,
                            IsSelfEvaluation: item.IsSelfEvaluation,
                            OrderNo: item.OrderNo + 1
                        });
                    }
                }
            };
            return EvaluationItemGrid;
        }(Serenity.EntityGrid));
        EvaluationItemGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EvaluationItemGrid);
        Evaluation.EvaluationItemGrid = EvaluationItemGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemPreviewCompanyEvaluation = (function () {
            function EvaluationItemPreviewCompanyEvaluation(container) {
                //this.InitView(container);
                this.container = container;
            }
            EvaluationItemPreviewCompanyEvaluation.prototype.init = function () {
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var html = "<div class='container'>\n                                <div class='row'>\n                                    <div col-md='3'>\u4F60\u5BF9\u516C\u53F8\u7684\u653F\u7B56\u3001\u5236\u5EA6\u3001\u6587\u5316\u7B49\u65B9\u9762\u6709\u4EC0\u4E48\u770B\u6CD5\u548C\u610F\u89C1\uFF1F</div>\n                                    <div col-md='10'><textarea id='content' class='form-control' style= 'width:100%;min-height:150px;'></textarea ></div>\n                                </div>\n                                <div class='row text-center'>\n                                    <a id='preva' href='PreviewSelfEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;<a id='nexta' href='PreviewSelfEvaluation0?i=" + examId + "'>\u4E0B\u4E00\u9875<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a>\n                                </div>\n                                </div>\n                             ";
                this.container.html(html);
            };
            return EvaluationItemPreviewCompanyEvaluation;
        }());
        Evaluation.EvaluationItemPreviewCompanyEvaluation = EvaluationItemPreviewCompanyEvaluation;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemPreviewEvaluation = (function () {
            function EvaluationItemPreviewEvaluation(container) {
                //this.InitView(container);
                this.container = container;
            }
            EvaluationItemPreviewEvaluation.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var res = Evaluation.EvaluationItemService.GetEvaluation1({ ExamId: examId }, function (response) {
                    console.log(response);
                    var grps = response.reduce(function (result, current) {
                        result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                        result[current.FirstKpiName].push(current);
                        return result;
                    }, {});
                    var html = "<div class='row'> <table>\n                                <tr>\n                                    <th class='text-center' style='font-size:18px;' colspan='4'>\u4ED6\u4EBA\u8BC4\u4EF7</th>\n                                </tr>\n                                    <tr>\n                                        <td style='width:80px;'>\u8003\u6838\u9879\u76EE</td>\n                                        <td style='width:80px;'>\u8BC4\u4EF7\u5185\u5BB9</td>\n                                        <td style='min-width:400px;'>\u8BC4\u4EF7\u6807\u51C6</td>\n                                        <td style='width:80px;'>\u5F97\u5206</td>\n                                    </tr>\n                                ";
                    for (var pro in grps) {
                        //console.log(pro);
                        var subGrps = grps[pro].reduce(function (result, current) {
                            result[current.SecondKpiName] = result[current.SecondKpiName] || [];
                            result[current.SecondKpiName].push(current);
                            return result;
                        }, {});
                        console.log(subGrps);
                        var subKeys = [];
                        for (var subpro in subGrps) {
                            subKeys.push(subpro);
                        }
                        var toprowpan = subKeys.length;
                        var colspan = 5;
                        var i = 0;
                        for (var subpro in subGrps) {
                            var subarr = subGrps[subpro];
                            html += '<tr>';
                            if (i === 0) {
                                html += "<td rowspan='" + toprowpan + "' style='vertical-align: middle;width:80px'>" + pro + "</td>";
                            }
                            i++;
                            html += "<td>" + subpro + "</td>";
                            $.each(subarr, function (index, value) {
                                html += "<td><textarea style='width:100%;min-height:100px;' type='text'>" + value.Content + "</textarea></td>";
                            });
                            html += '<td><input type="text" /></td></tr>';
                        }
                    }
                    html += "<tr><td colspan='4' class='text-center'><a href='PreviewSelfEvaluation0?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;&nbsp;<a href='PreviewEvaluation2?i=" + examId + "'><i class='fa fa-arrow-right' aria-hidden='true'></i>\u4E0B\u4E00\u9875</a></td><tr></table></div>";
                    _this.container.html(html);
                });
            };
            return EvaluationItemPreviewEvaluation;
        }());
        Evaluation.EvaluationItemPreviewEvaluation = EvaluationItemPreviewEvaluation;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemPreviewEvaluation2 = (function () {
            function EvaluationItemPreviewEvaluation2(container) {
                //this.InitView(container);
                this.container = container;
            }
            EvaluationItemPreviewEvaluation2.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var res = Evaluation.EvaluationItemService.GetEvaluation2({ ExamId: examId }, function (response) {
                    console.log(response);
                    var grps = response.reduce(function (result, current) {
                        result[current.FirstKpiName] = result[current.FirstKpiName] || [];
                        result[current.FirstKpiName].push(current);
                        return result;
                    }, {});
                    var html = "<div class='row'><table>\n                                <tr>\n                                    <th class='text-center' style='font-size:18px;' colspan='8'>\u4ED6\u4EBA\u8BC4\u4EF7</th>\n                                </tr>\n                               \n                                    <tr>\n                                        <td style='width:80px;'>\u8003\u6838\u9879\u76EE</td>\n                                        <td style='width:80px;'>\u8BC4\u4EF7\u5185\u5BB9</td>\n                                        <td colspan='5' style='min-width:400px;'>\u8BC4\u4EF7\u6807\u51C6</td>\n                                    </tr>\n                                ";
                    for (var pro in grps) {
                        //console.log(pro);
                        var subGrps = grps[pro].reduce(function (result, current) {
                            result[current.SecondKpiName] = result[current.SecondKpiName] || [];
                            result[current.SecondKpiName].push(current);
                            return result;
                        }, {});
                        console.log(subGrps);
                        var subKeys = [];
                        for (var subpro in subGrps) {
                            subKeys.push(subpro);
                        }
                        var toprowpan = subKeys.length;
                        var colspan = 5;
                        var i = 0;
                        for (var subpro in subGrps) {
                            var subarr = subGrps[subpro];
                            html += '<tr>';
                            if (i === 0) {
                                html += "<td rowspan='" + toprowpan + "' style='vertical-align: middle;width:80px'>" + pro + "</td>";
                            }
                            i++;
                            html += "<td style='vertical-align:middle;'>" + subpro + "</td>";
                            $.each(subarr, function (index, value) {
                                html += "<td style='vertical-align:bottom;'><label style='font-weight:normal'>" + value.Content + "(" + value.Score + "\u5206)<br/><input type=\"radio\" name='" + value.SecondKpiName + "' value='" + value.Score + "' style='width:100%'/></label> </td>";
                            });
                        }
                    }
                    html += "<tr><td colspan='8' class='text-center'><a href='PreviewEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a></td><tr></table></div>";
                    _this.container.html(html);
                });
            };
            return EvaluationItemPreviewEvaluation2;
        }());
        Evaluation.EvaluationItemPreviewEvaluation2 = EvaluationItemPreviewEvaluation2;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemPreviewSelfEvaluation = (function () {
            function EvaluationItemPreviewSelfEvaluation(container) {
                //this.InitView(container);
                this.container = container;
            }
            EvaluationItemPreviewSelfEvaluation.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                Evaluation.ExamService.List({}, function (response) {
                    var opts = "<select id='exam_list' class='form-control'><option value='0'>请选择考核标题</option>";
                    response.Entities.forEach(function (value, index) {
                        if (value.Id === examId) {
                            opts += "<option value=" + value.Id + " selected>" + value.Title + "</option>";
                        }
                        else {
                            opts += "<option value=" + value.Id + ">" + value.Title + "</option>";
                        }
                    });
                    opts += "</select><div id='exam_detail' class='row'></div>";
                    _this.container.html(opts);
                    var slt = $('#exam_list');
                    var exam_detail = $('#exam_detail');
                    if (examId) {
                        _this.initHtml(exam_detail, examId);
                    }
                    slt.change(function () {
                        var examId = parseInt(slt.val());
                        if (examId === 0) {
                            Q.notifyWarning('请选择考核标题');
                        }
                        else {
                            _this.initHtml(exam_detail, examId);
                        }
                    });
                });
            };
            EvaluationItemPreviewSelfEvaluation.prototype.initHtml = function (container, examId) {
                var res = Evaluation.EvaluationItemService.GetSelfEvaluation({ ExamId: examId }, function (response) {
                    var html = "<table>\n                                   <tr>\n                                        <th colspan='4' class='text-center' style='font-size:18px'>\n                                            \u81EA\u6211\u8BC4\u4EF7\n                                        </th>\n                                    </tr>\n                                ";
                    if (response !== null) {
                        var count_4 = res.responseJSON.length;
                        if (res.responseJSON.length !== 0) {
                            res.responseJSON.forEach(function (item, index) {
                                html += "<tr>";
                                if (index == 0) {
                                    html += "<td rowspan='" + count_4 + "' style='vertical-align: middle;width:80px'>" + item.FirstKpiName + "</td>";
                                }
                                html += "<td width='80px'>" + item.SecondKpiName + "</td>\n                                    <td width='150px'>" + item.Content + "</td>";
                                if (item.ContentType === 1) {
                                    //输入框
                                    html += "<td>" + item.Mark + "<br/><textarea style='width:100%;min-height:150px;'></textarea></td>";
                                }
                                //html += `<td style='width:150px;'>${item.Remark}</td>`;
                                html += "</tr>";
                            });
                            html += "<tr><td colspan='4' class='text-center'><a href='PreviewCompanyEvaluation?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table>";
                        }
                        else {
                            html += "<tr><td colspan='4'>请添加或启用自我评价内容</td></tr>";
                            html += "<tr><td colspan='4' class='text-center'><a href='PreviewCompanyEvaluation?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table>";
                        }
                    }
                    else {
                        html += "<tr><td colspan='4'>请添加或启用自我评价内容</td></tr>";
                        html += "<tr><td colspan='4' class='text-center'><a href='PreviewCompanyEvaluation?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table>";
                    }
                    container.html(html);
                });
            };
            return EvaluationItemPreviewSelfEvaluation;
        }());
        Evaluation.EvaluationItemPreviewSelfEvaluation = EvaluationItemPreviewSelfEvaluation;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationItemPreviewSelfEvaluation0 = (function () {
            function EvaluationItemPreviewSelfEvaluation0(container) {
                //this.InitView(container);
                this.container = container;
            }
            EvaluationItemPreviewSelfEvaluation0.prototype.init = function () {
                var _this = this;
                var examId = parseInt(hr.Utils.getQueryString("i", window.location.href));
                var res = Evaluation.EvaluationItemService.GetSelfEvaluation({ ExamId: examId }, function (response) {
                    var html = "<div class='row'><table>\n                                    <tr>\n                                        <th class='text-center' style='font-size:18px;' colspan='5'>\u4ED6\u4EBA\u8BC4\u4EF7</th>\n                                     </tr>\n                                    <tr>\n                                        <td style='width:80px;'>\u8003\u6838\u9879\u76EE</td>\n                                        <td style='width:80px;'>\u8BC4\u4EF7\u5185\u5BB9</td>\n                                        <td colspan='2' style='min-width:400px;'>\u8BC4\u4EF7\u6807\u51C6(\u88AB\u8BC4\u4EBA\u7684\u81EA\u6211\u8BC4\u4EF7)</td>\n                                        <td style='width:80px;'>\u5F97\u5206(\u53C2\u8BC4\u4EBA\u8BC4\u4EF7)</td>\n                                    </tr>\n                                ";
                    if (response !== null) {
                        var count_5 = res.responseJSON.length;
                        if (res.responseJSON.length !== 0) {
                            res.responseJSON.forEach(function (item, index) {
                                html += "<tr>";
                                if (index == 0) {
                                    html += "<td rowspan='" + count_5 + "' style='vertical-align: middle;width:80px'>" + item.FirstKpiName + "</td>";
                                }
                                html += "<td width='80px'>" + item.SecondKpiName + "</td>\n                                    <td width='150px'>" + item.Content + "</td>";
                                if (item.ContentType === 1) {
                                    //输入框
                                    html += "<td>" + item.Mark + "</td>";
                                }
                                html += "<td><input type=\"text\" /></td></tr>";
                            });
                            html += "<tr><td colspan='5' class='text-center'><a href='PreviewCompanyEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;&nbsp;<a href='PreviewEvaluation?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table>";
                        }
                        else {
                            html += "<tr><td colspan='5'>请添加或启用自我评价内容</td></tr>";
                            html += "<tr><td colspan='5' class='text-center'><a href='PreviewCompanyEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;&nbsp;<a href='PreviewEvaluation?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table>";
                        }
                    }
                    else {
                        html += "<tr><td colspan='5'>请添加或启用自我评价内容</td></tr>";
                        html += "<tr><td colspan='5' class='text-center'><a href='PreviewCompanyEvaluation?i=" + examId + "'><i class='fa fa-arrow-left' aria-hidden='true'></i>\u4E0A\u4E00\u9875</a>&nbsp;&nbsp;&nbsp;<a href='PreviewEvaluation?i=" + examId + "'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\u4E0B\u4E00\u9875</a></td><tr></table></div>";
                    }
                    _this.container.html(html);
                });
            };
            return EvaluationItemPreviewSelfEvaluation0;
        }());
        Evaluation.EvaluationItemPreviewSelfEvaluation0 = EvaluationItemPreviewSelfEvaluation0;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultDialog = (function (_super) {
            __extends(EvaluationResultDialog, _super);
            function EvaluationResultDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new EvaluationResultForm(_this.idPrefix);
                return _this;
            }
            EvaluationResultDialog.prototype.getFormKey = function () { return EvaluationResultForm.formKey; };
            EvaluationResultDialog.prototype.getIdProperty = function () { return EvaluationResultRow.idProperty; };
            EvaluationResultDialog.prototype.getLocalTextPrefix = function () { return EvaluationResultRow.localTextPrefix; };
            EvaluationResultDialog.prototype.getService = function () { return EvaluationResultService.baseUrl; };
            return EvaluationResultDialog;
        }(Serenity.EntityDialog));
        EvaluationResultDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], EvaluationResultDialog);
        Evaluation.EvaluationResultDialog = EvaluationResultDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultGrid = (function (_super) {
            __extends(EvaluationResultGrid, _super);
            function EvaluationResultGrid(container) {
                return _super.call(this, container) || this;
            }
            EvaluationResultGrid.prototype.getColumnsKey = function () { return 'Evaluation.EvaluationResult'; };
            EvaluationResultGrid.prototype.getDialogType = function () { return Evaluation.EvaluationResultDialog; };
            EvaluationResultGrid.prototype.getIdProperty = function () { return EvaluationResultRow.idProperty; };
            EvaluationResultGrid.prototype.getLocalTextPrefix = function () { return EvaluationResultRow.localTextPrefix; };
            EvaluationResultGrid.prototype.getService = function () { return EvaluationResultService.baseUrl; };
            EvaluationResultGrid.prototype.getButtons = function () {
                //Q.Authorization.hasPermission("")
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            return EvaluationResultGrid;
        }(Serenity.EntityGrid));
        EvaluationResultGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EvaluationResultGrid);
        Evaluation.EvaluationResultGrid = EvaluationResultGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultDetailDialog = (function (_super) {
            __extends(EvaluationResultDetailDialog, _super);
            function EvaluationResultDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.EvaluationResultDetailForm(_this.idPrefix);
                return _this;
            }
            EvaluationResultDetailDialog.prototype.getFormKey = function () { return Evaluation.EvaluationResultDetailForm.formKey; };
            EvaluationResultDetailDialog.prototype.getIdProperty = function () { return Evaluation.EvaluationResultDetailRow.idProperty; };
            EvaluationResultDetailDialog.prototype.getLocalTextPrefix = function () { return Evaluation.EvaluationResultDetailRow.localTextPrefix; };
            EvaluationResultDetailDialog.prototype.getNameProperty = function () { return Evaluation.EvaluationResultDetailRow.nameProperty; };
            EvaluationResultDetailDialog.prototype.getService = function () { return Evaluation.EvaluationResultDetailService.baseUrl; };
            return EvaluationResultDetailDialog;
        }(Serenity.EntityDialog));
        EvaluationResultDetailDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], EvaluationResultDetailDialog);
        Evaluation.EvaluationResultDetailDialog = EvaluationResultDetailDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultDetailGrid = (function (_super) {
            __extends(EvaluationResultDetailGrid, _super);
            function EvaluationResultDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            EvaluationResultDetailGrid.prototype.getColumnsKey = function () { return 'Evaluation.EvaluationResultDetail'; };
            EvaluationResultDetailGrid.prototype.getDialogType = function () { return Evaluation.EvaluationResultDetailDialog; };
            EvaluationResultDetailGrid.prototype.getIdProperty = function () { return Evaluation.EvaluationResultDetailRow.idProperty; };
            EvaluationResultDetailGrid.prototype.getLocalTextPrefix = function () { return Evaluation.EvaluationResultDetailRow.localTextPrefix; };
            EvaluationResultDetailGrid.prototype.getService = function () { return Evaluation.EvaluationResultDetailService.baseUrl; };
            return EvaluationResultDetailGrid;
        }(Serenity.EntityGrid));
        EvaluationResultDetailGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EvaluationResultDetailGrid);
        Evaluation.EvaluationResultDetailGrid = EvaluationResultDetailGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var EvaluationResultViewGrid = (function (_super) {
            __extends(EvaluationResultViewGrid, _super);
            function EvaluationResultViewGrid(container, userId, examId) {
                var _this = _super.call(this, container) || this;
                _this.userId = userId;
                _this.examId = examId;
                _this.setTitle("");
                return _this;
            }
            EvaluationResultViewGrid.prototype.getColumnsKey = function () { return 'Evaluation.EvaluationResultView'; };
            //protected getDialogType() { return EvaluationResultViewDialog; }
            EvaluationResultViewGrid.prototype.getLocalTextPrefix = function () { return Evaluation.EvaluationResultViewRow.localTextPrefix; };
            EvaluationResultViewGrid.prototype.getService = function () { return Evaluation.EvaluationResultViewService.baseUrl; };
            EvaluationResultViewGrid.prototype.getIdProperty = function () { return Evaluation.EvaluationResultViewRow.idProperty; };
            EvaluationResultViewGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass === "add-button"; }), 1);
                buttons.push({
                    title: '发送邮件通知所有未完成评估的人进行评估',
                    cssClass: 'outlook-button',
                    onClick: function () {
                        Q.confirm("确认发送邮件吗", function () {
                            //get all the items
                            var items = _this.view.getItems().filter(function (p) { return p.TotalScore === 0; });
                            var arr = new Array();
                            for (var i = 0; i < items.length; i++) {
                                arr.push({
                                    Email: items[i].EvaluationEmail,
                                    EvaluationUserName: items[i].EvaluationUser,
                                    Title: items[i].Title,
                                    Url: "Evaluation/Evaluation/SelfEvaluation?i=" + items[i].ExamId,
                                    UserName: items[i].Username
                                });
                            }
                            Evaluation.EvaluationResultViewService.BatchSendNotifyEmail({
                                Entities: arr
                            }, function (response) {
                                if (response) {
                                    Q.notifySuccess("邮件发送成功");
                                }
                                else {
                                    Q.notifyError("邮件发送失败");
                                }
                            });
                        });
                    }
                });
                return buttons;
            };
            EvaluationResultViewGrid.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UserId'], '=', this.userId], [['ExamId'], '=', this.examId]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            EvaluationResultViewGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            EvaluationResultViewGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            EvaluationResultViewGrid.prototype.getColumns = function () {
                //super.getQuickFilters();
                var columns = _super.prototype.getColumns.call(this);
                var flds = Evaluation.EvaluationResultViewRow.Fields;
                var index = 0;
                Q.first(columns, function (x) { return x.field === flds.EvaluationEmail; })
                    .format = function (ctx) {
                    //TODO: 考虑过期的情况
                    if (ctx.item.TotalScore > 0) {
                        return ctx.value;
                    }
                    else {
                        return "<a href='#' class='send_email'>" + ctx.value + "</a>";
                    }
                };
                return columns;
            };
            EvaluationResultViewGrid.prototype.onClick = function (e, row, cell) {
                var target = $(e.target);
                var rst = this.itemAt(row);
                if (target.hasClass("send_email")) {
                    Q.confirm("发送邮件通知吗", function () {
                        Evaluation.EvaluationResultViewService.SendNotifyEmail({
                            UserName: rst.Username,
                            Title: rst.Title,
                            Url: "Evaluation/Evaluation/SelfEvaluation?i=" + rst.ExamId,
                            Email: rst.EvaluationEmail,
                            EvaluationUserName: rst.EvaluationUser
                        }, (function (response) {
                            if (response) {
                                Q.notifyInfo("邮件已发送");
                            }
                        }));
                    });
                }
            };
            return EvaluationResultViewGrid;
        }(Serenity.EntityGrid));
        EvaluationResultViewGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EvaluationResultViewGrid);
        Evaluation.EvaluationResultViewGrid = EvaluationResultViewGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ExamDialog = (function (_super) {
            __extends(ExamDialog, _super);
            function ExamDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.ExamForm(_this.idPrefix);
                return _this;
            }
            ExamDialog.prototype.getFormKey = function () { return Evaluation.ExamForm.formKey; };
            ExamDialog.prototype.getIdProperty = function () { return Evaluation.ExamRow.idProperty; };
            ExamDialog.prototype.getLocalTextPrefix = function () { return Evaluation.ExamRow.localTextPrefix; };
            ExamDialog.prototype.getNameProperty = function () { return Evaluation.ExamRow.nameProperty; };
            ExamDialog.prototype.getService = function () { return Evaluation.ExamService.baseUrl; };
            ExamDialog.prototype.afterLoadEntity = function () {
                $("[name='EvaluationIds']").click(function () {
                    (new Evaluation.ExamListDialog()).dialogOpen();
                });
            };
            return ExamDialog;
        }(Serenity.EntityDialog));
        ExamDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ExamDialog);
        Evaluation.ExamDialog = ExamDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ExamGrid = (function (_super) {
            __extends(ExamGrid, _super);
            function ExamGrid(container) {
                return _super.call(this, container) || this;
            }
            ExamGrid.prototype.getColumnsKey = function () { return 'Evaluation.Exam'; };
            ExamGrid.prototype.getDialogType = function () { return Evaluation.ExamDialog; };
            ExamGrid.prototype.getIdProperty = function () { return Evaluation.ExamRow.idProperty; };
            ExamGrid.prototype.getLocalTextPrefix = function () { return Evaluation.ExamRow.localTextPrefix; };
            ExamGrid.prototype.getService = function () { return Evaluation.ExamService.baseUrl; };
            ExamGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            ExamGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            ExamGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            ExamGrid.prototype.addButtonClick = function () {
                var now = new Date();
                var endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
                this.editItem({
                    StartDate: Q.formatDate(now, 'yyyy-MM-dd'),
                    EndDate: Q.formatDate(endDate, 'yyyy-MM-dd'),
                    IsEnabled: true
                });
            };
            ExamGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            ExamGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.is('.check-box')) {
                    return;
                }
                if (item) {
                    e.preventDefault();
                    var checkBox = target.closest('.slick-row').find('.check-box');
                    if (!checkBox.hasClass("checked")) {
                        this.rowSelection.clear();
                        checkBox.click();
                    }
                }
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('确认删除该条记录吗?如果删除，则配置过该考核内容的考核关系也会被删除', function () {
                            Evaluation.ExamService.Delete({
                                EntityId: item.Id,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            ExamGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: '一键归档',
                    cssClass: 'add-file-button',
                    onClick: function () {
                        var selectedKeys = _this.rowSelection.getSelectedKeys();
                        if (selectedKeys.length == 0) {
                            Q.alert("请选择需要归档的考核");
                        }
                        else if (selectedKeys.length > 1) {
                            Q.alert("一次只能选择一条记录");
                        }
                        else {
                            Q.confirm("确认要归档选中的考核吗", function () {
                                var item = _this.view.getItemById(selectedKeys[0]);
                                Evaluation.ExamService.Archive({
                                    ExamId: item.Id,
                                    Title: item.Title
                                }, function (response) {
                                    Q.notifySuccess("归档成功！");
                                    _this.refresh();
                                });
                            });
                        }
                    }
                });
                return buttons;
            };
            return ExamGrid;
        }(Serenity.EntityGrid));
        ExamGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ExamGrid);
        Evaluation.ExamGrid = ExamGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ExamListDialog = (function (_super) {
            __extends(ExamListDialog, _super);
            function ExamListDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExamListDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                Evaluation.EvaluationItemService.List({}, function (response) {
                    _this.examList = new Evaluation.EvaluationItemGrid($("#div").first()).init();
                    var selectedKeys = $("[name='EvaluationIds']").val().split(',');
                    _this.examList.rowSelection.selectKeys(selectedKeys);
                    Q.initFullHeightGridPage($('#div'));
                });
            };
            ExamListDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='div' style='height:500px;'></div>";
            };
            ExamListDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = '考核项列表';
                opt.buttons = [{
                        text: "Ok",
                        showText: "Ok",
                        click: function () {
                            //Q.notifyInfo("ok");
                            //console.log(this.examList.rowSelection.getSelectedKeys());
                            var selectedItems = _this.examList.rowSelection.getSelectedKeys();
                            if (selectedItems.length == 0) {
                                Q.notifyWarning("请选择要发布的考核项");
                                return;
                            }
                            $("[name='EvaluationIds']").val(_this.examList.rowSelection.getSelectedKeys().join(','));
                            _this.dialogClose();
                        }
                    }, {
                        text: "Cancel",
                        showText: "Cancel",
                        click: function () {
                            Q.notifyInfo("cancel");
                            _this.dialogClose();
                        }
                    }];
                return opt;
            };
            return ExamListDialog;
        }(Serenity.TemplatedDialog));
        ExamListDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], ExamListDialog);
        Evaluation.ExamListDialog = ExamListDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var FirstKpiDialog = (function (_super) {
            __extends(FirstKpiDialog, _super);
            function FirstKpiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.FirstKpiForm(_this.idPrefix);
                return _this;
            }
            FirstKpiDialog.prototype.getFormKey = function () { return Evaluation.FirstKpiForm.formKey; };
            FirstKpiDialog.prototype.getIdProperty = function () { return Evaluation.FirstKpiRow.idProperty; };
            FirstKpiDialog.prototype.getLocalTextPrefix = function () { return Evaluation.FirstKpiRow.localTextPrefix; };
            FirstKpiDialog.prototype.getNameProperty = function () { return Evaluation.FirstKpiRow.nameProperty; };
            FirstKpiDialog.prototype.getService = function () { return Evaluation.FirstKpiService.baseUrl; };
            return FirstKpiDialog;
        }(Serenity.EntityDialog));
        FirstKpiDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], FirstKpiDialog);
        Evaluation.FirstKpiDialog = FirstKpiDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var FirstKpiGrid = (function (_super) {
            __extends(FirstKpiGrid, _super);
            function FirstKpiGrid(container) {
                return _super.call(this, container) || this;
            }
            FirstKpiGrid.prototype.getColumnsKey = function () { return 'Evaluation.FirstKpi'; };
            FirstKpiGrid.prototype.getDialogType = function () { return Evaluation.FirstKpiDialog; };
            FirstKpiGrid.prototype.getIdProperty = function () { return Evaluation.FirstKpiRow.idProperty; };
            FirstKpiGrid.prototype.getLocalTextPrefix = function () { return Evaluation.FirstKpiRow.localTextPrefix; };
            FirstKpiGrid.prototype.getService = function () { return Evaluation.FirstKpiService.baseUrl; };
            FirstKpiGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            FirstKpiGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            FirstKpiGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            FirstKpiGrid.prototype.addButtonClick = function () {
                this.editItem({
                    OrderNo: this.getMax(this.getItems()) + 1
                });
            };
            FirstKpiGrid.prototype.getMax = function (arr) {
                var tmp = arr.map(function (p) { return p.OrderNo; });
                var max = tmp[0];
                for (var i = 1; i < tmp.length; i++) {
                    if (max < tmp[i]) {
                        max = tmp[i];
                    }
                }
                return max;
            };
            return FirstKpiGrid;
        }(Serenity.EntityGrid));
        FirstKpiGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], FirstKpiGrid);
        Evaluation.FirstKpiGrid = FirstKpiGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var LeaderShipDialog = (function (_super) {
            __extends(LeaderShipDialog, _super);
            function LeaderShipDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Evaluation.LeaderShipForm(_this.idPrefix);
                return _this;
            }
            LeaderShipDialog.prototype.getFormKey = function () { return Evaluation.LeaderShipForm.formKey; };
            LeaderShipDialog.prototype.getIdProperty = function () { return Evaluation.LeaderShipRow.idProperty; };
            LeaderShipDialog.prototype.getLocalTextPrefix = function () { return Evaluation.LeaderShipRow.localTextPrefix; };
            LeaderShipDialog.prototype.getService = function () { return Evaluation.LeaderShipService.baseUrl; };
            LeaderShipDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (!this.isNew)
                    Serenity.EditorUtils.setReadOnly(this.form.UserId, true);
            };
            return LeaderShipDialog;
        }(Serenity.EntityDialog));
        LeaderShipDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], LeaderShipDialog);
        Evaluation.LeaderShipDialog = LeaderShipDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var LeaderShipGrid = (function (_super) {
            __extends(LeaderShipGrid, _super);
            function LeaderShipGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    toggleField: Evaluation.LeaderShipRow.Fields.UserUsername,
                    getParentId: function (x) { return x.ParentUserId; },
                    initialCollapse: function () { return false; },
                });
                // save prior drag target to restore its color during drag
                var priorDragTarget;
                // prevent the grid from cancelling drag'n'drop by default
                _this.slickGrid.onDragInit.subscribe(function (e, dd) {
                    e.stopImmediatePropagation();
                });
                // this method is called when an item is about to be dragged
                _this.slickGrid.onDragStart.subscribe(function (e, dd) {
                    // only allow edit links to be dragged
                    if (!$(e.target).hasClass('s-EditLink'))
                        return;
                    // make sure there is a cell in source location
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    if (!cell) {
                        return;
                    }
                    // notify that we'll handle drag
                    e.stopImmediatePropagation();
                    // save details about dragged item
                    dd.row = cell.row;
                    var item = _this.itemAt(cell.row);
                    dd.item = item;
                    // a unique name for our operation
                    dd.mode = "move";
                    // create an absolute position helper shown during dragging
                    var helper = $("<span></span>")
                        .addClass('drag-helper')
                        .text("Moving " + item.UserUsername)
                        .appendTo(document.body);
                    dd.helper = helper;
                    console.log(dd.helper);
                });
                // this method is periodically called during drag
                _this.slickGrid.onDrag.subscribe(function (e, dd) {
                    // only handle our operation
                    if (dd.mode != "move") {
                        return;
                    }
                    // if we changed color of some target before, reset it
                    if (priorDragTarget && priorDragTarget != e.target) {
                        $(priorDragTarget).css('background-color', '');
                        priorDragTarget = null;
                    }
                    // find target, the source will drag into
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // accept only edit links and valid items as drag target
                    var reject = !$(e.target).hasClass('s-EditLink') || !_this.canMoveUnder(dd.item, target);
                    if (reject) {
                        dd.helper.text("Can't move " + dd.item.UserUsername + " here");
                    }
                    else {
                        dd.helper.text("Move " + dd.item.UserUsername + " under " + $(e.target).text());
                        // change color of current drag target
                        $(e.target).css('background-color', '#ddeeee');
                        priorDragTarget = e.target;
                    }
                    // toggle class of helper to show relevant accept / reject icon
                    dd.helper.toggleClass('reject', reject);
                    // position helper next to current mouse position
                    dd.helper.css({ top: e.pageY + 5, left: e.pageX + 4 });
                });
                // this is called when drag is completed
                _this.slickGrid.onDragEnd.subscribe(function (e, dd) {
                    if (dd.mode != "move") {
                        return;
                    }
                    // prevent browser from changing url
                    e.preventDefault();
                    // clear indicator color and drag helper
                    priorDragTarget && $(priorDragTarget).css('background-color', '');
                    dd.helper.remove();
                    // determine target row
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var item = dd.item;
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // check again that this is valid drag target
                    if ($(e.target).hasClass('s-EditLink') && _this.canMoveUnder(item, target)) {
                        // this will move our primary drag source under new parent
                        var moveItem = function (onSuccess) {
                            Evaluation.LeaderShipService.Update({
                                EntityId: item.UserId,
                                Entity: {
                                    ParentUserId: target.UserId
                                }
                            }, onSuccess);
                        };
                        // if drag source has some children, need some confirmation
                        var children = _this.getChildren(dd.item);
                        if (children.length > 0) {
                            Q.confirm('Move its children alongside the item?', function () {
                                // if responded yes, moving item under new parent should be enough
                                moveItem(function () { return _this.refresh(); });
                            }, {
                                onNo: function () {
                                    // if responded no, children should move under old parent of item
                                    var oldParentId = item.ParentUserId == null ? null : item.ParentUserId;
                                    var moveNextChild = function (onSuccess) {
                                        var _this = this;
                                        if (children.length) {
                                            var x = children.shift();
                                            Evaluation.LeaderShipService.Update({
                                                EntityId: x.UserId,
                                                Entity: {
                                                    ParentUserId: oldParentId || null
                                                }
                                            }, function () { return moveNextChild(onSuccess); }, {
                                                onError: function () { return _this.refresh(); }
                                            });
                                        }
                                        else
                                            onSuccess();
                                    };
                                    // first move item itself under new parent, 
                                    // then move its children under old parent one by one
                                    moveItem(function () { return moveNextChild(function () { return _this.refresh(); }); });
                                }
                            });
                        }
                        else {
                            // item has no children, just move it under new parent
                            moveItem(function () { return _this.refresh(); });
                        }
                    }
                    return false;
                });
                return _this;
            }
            LeaderShipGrid.prototype.getColumnsKey = function () { return 'Evaluation.LeaderShip'; };
            LeaderShipGrid.prototype.getDialogType = function () { return Evaluation.LeaderShipDialog; };
            LeaderShipGrid.prototype.getIdProperty = function () { return Evaluation.LeaderShipRow.idProperty; };
            LeaderShipGrid.prototype.getLocalTextPrefix = function () { return Evaluation.LeaderShipRow.localTextPrefix; };
            LeaderShipGrid.prototype.getService = function () { return Evaluation.LeaderShipService.baseUrl; };
            LeaderShipGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            LeaderShipGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            LeaderShipGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            /**
             * This method will determine if item can be moved under a given target
             * An item can't be moved under itself, under one of its children
             */
            LeaderShipGrid.prototype.canMoveUnder = function (item, target) {
                if (!item || !target || item.UserId == target.UserId || item.ParentUserId == target.UserId)
                    return false;
                if (Q.any(this.getParents(target), function (x) { return x.UserId == item.UserId; }))
                    return false;
                return true;
            };
            /**
             * Gets children list of an item
             */
            LeaderShipGrid.prototype.getChildren = function (item) {
                return this.getItems().filter(function (x) { return x.ParentUserId === item.UserId; });
            };
            /**
             * Gets all parents of an item
             */
            LeaderShipGrid.prototype.getParents = function (item) {
                // use this to prevent infinite recursion
                var visited = {};
                var result = [];
                // while item has a parent and not visited yet
                while (item.ParentUserId && !visited[item.ParentUserId]) {
                    // find parent by its ID
                    item = this.view.getItemById(item.ParentUserId);
                    if (!item)
                        break;
                    result.push(item);
                    visited[item.UserId] = true;
                }
                return result;
            };
            //protected getButtons() {
            //    return [];
            //}
            LeaderShipGrid.prototype.usePager = function () {
                return false;
            };
            return LeaderShipGrid;
        }(Serenity.EntityGrid));
        LeaderShipGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LeaderShipGrid);
        Evaluation.LeaderShipGrid = LeaderShipGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ScoreDetailDialog = (function (_super) {
            __extends(ScoreDetailDialog, _super);
            function ScoreDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.ScoreDetailForm(_this.idPrefix);
                return _this;
            }
            ScoreDetailDialog.prototype.getFormKey = function () { return Evaluation.ScoreDetailForm.formKey; };
            ScoreDetailDialog.prototype.getIdProperty = function () { return Evaluation.ScoreDetailRow.idProperty; };
            ScoreDetailDialog.prototype.getLocalTextPrefix = function () { return Evaluation.ScoreDetailRow.localTextPrefix; };
            ScoreDetailDialog.prototype.getService = function () { return Evaluation.ScoreDetailService.baseUrl; };
            return ScoreDetailDialog;
        }(Serenity.EntityDialog));
        ScoreDetailDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ScoreDetailDialog);
        Evaluation.ScoreDetailDialog = ScoreDetailDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ScoreDetailGrid = (function (_super) {
            __extends(ScoreDetailGrid, _super);
            function ScoreDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            ScoreDetailGrid.prototype.getColumnsKey = function () { return 'Evaluation.ScoreDetail'; };
            ScoreDetailGrid.prototype.getDialogType = function () { return Evaluation.ScoreDetailDialog; };
            ScoreDetailGrid.prototype.getIdProperty = function () { return Evaluation.ScoreDetailRow.idProperty; };
            ScoreDetailGrid.prototype.getLocalTextPrefix = function () { return Evaluation.ScoreDetailRow.localTextPrefix; };
            ScoreDetailGrid.prototype.getService = function () { return Evaluation.ScoreDetailService.baseUrl; };
            return ScoreDetailGrid;
        }(Serenity.EntityGrid));
        ScoreDetailGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ScoreDetailGrid);
        Evaluation.ScoreDetailGrid = ScoreDetailGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SecondKpiDialog = (function (_super) {
            __extends(SecondKpiDialog, _super);
            function SecondKpiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.SecondKpiForm(_this.idPrefix);
                return _this;
            }
            SecondKpiDialog.prototype.getFormKey = function () { return Evaluation.SecondKpiForm.formKey; };
            SecondKpiDialog.prototype.getIdProperty = function () { return Evaluation.SecondKpiRow.idProperty; };
            SecondKpiDialog.prototype.getLocalTextPrefix = function () { return Evaluation.SecondKpiRow.localTextPrefix; };
            SecondKpiDialog.prototype.getNameProperty = function () { return Evaluation.SecondKpiRow.nameProperty; };
            SecondKpiDialog.prototype.getService = function () { return Evaluation.SecondKpiService.baseUrl; };
            return SecondKpiDialog;
        }(Serenity.EntityDialog));
        SecondKpiDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], SecondKpiDialog);
        Evaluation.SecondKpiDialog = SecondKpiDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SecondKpiGrid = (function (_super) {
            __extends(SecondKpiGrid, _super);
            function SecondKpiGrid(container) {
                return _super.call(this, container) || this;
            }
            SecondKpiGrid.prototype.getColumnsKey = function () { return 'Evaluation.SecondKpi'; };
            SecondKpiGrid.prototype.getDialogType = function () { return Evaluation.SecondKpiDialog; };
            SecondKpiGrid.prototype.getIdProperty = function () { return Evaluation.SecondKpiRow.idProperty; };
            SecondKpiGrid.prototype.getLocalTextPrefix = function () { return Evaluation.SecondKpiRow.localTextPrefix; };
            SecondKpiGrid.prototype.getService = function () { return Evaluation.SecondKpiService.baseUrl; };
            SecondKpiGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            SecondKpiGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            SecondKpiGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            return SecondKpiGrid;
        }(Serenity.EntityGrid));
        SecondKpiGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SecondKpiGrid);
        Evaluation.SecondKpiGrid = SecondKpiGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var SelfEvaluationResultGrid = (function (_super) {
            __extends(SelfEvaluationResultGrid, _super);
            function SelfEvaluationResultGrid(container) {
                var _this = _super.call(this, container) || this;
                console.log(hr.Authorization.userDefinition);
                return _this;
            }
            SelfEvaluationResultGrid.prototype.getColumnsKey = function () { return 'Evaluation.SelfEvaluationResult'; };
            //protected getDialogType() { return SelfEvaluationResultDialog; }
            SelfEvaluationResultGrid.prototype.getLocalTextPrefix = function () { return Evaluation.SelfEvaluationResultRow.localTextPrefix; };
            SelfEvaluationResultGrid.prototype.getService = function () { return Evaluation.SelfEvaluationResultService.baseUrl; };
            SelfEvaluationResultGrid.prototype.getIdProperty = function () { return Evaluation.SelfEvaluationResultRow.idProperty; };
            SelfEvaluationResultGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            SelfEvaluationResultGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            SelfEvaluationResultGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            SelfEvaluationResultGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons = buttons.filter(function (x) { return x.cssClass !== 'add-button'; });
                buttons.push(hr.Common.ExcelExportHelper.createToolButton({
                    title: '导出Excel',
                    hint: '导出Excel',
                    grid: this,
                    service: Evaluation.SelfEvaluationResultService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                return buttons;
            };
            SelfEvaluationResultGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                if (hr.Authorization.userDefinition.IsAdmin) {
                    return filters;
                }
                if (hr.Authorization.hasPermission("Evaluation:Users:LookupScript") && !hr.Authorization.hasPermission("Administration:Security")) {
                    var fld_3 = Evaluation.SelfEvaluationResultRow.Fields;
                    if (hr.Authorization.userDefinition.DepartmentName) {
                        Q.first(filters, function (x) { return x.field === fld_3.DepartmentName; }).init = function (w) {
                            var editor = w;
                            editor.value = hr.Authorization.userDefinition.DepartmentName.toString();
                            editor.element.attr("disabled", "disabled");
                        };
                        return filters.filter(function (x) { return x.field !== fld_3.Username; });
                    }
                }
                return filters;
            };
            return SelfEvaluationResultGrid;
        }(Serenity.EntityGrid));
        SelfEvaluationResultGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SelfEvaluationResultGrid);
        Evaluation.SelfEvaluationResultGrid = SelfEvaluationResultGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ToDoListDialog = (function (_super) {
            __extends(ToDoListDialog, _super);
            function ToDoListDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.ToDoListForm(_this.idPrefix);
                return _this;
            }
            ToDoListDialog.prototype.getFormKey = function () { return Evaluation.ToDoListForm.formKey; };
            ToDoListDialog.prototype.getIdProperty = function () { return Evaluation.ToDoListRow.idProperty; };
            ToDoListDialog.prototype.getLocalTextPrefix = function () { return Evaluation.ToDoListRow.localTextPrefix; };
            ToDoListDialog.prototype.getNameProperty = function () { return Evaluation.ToDoListRow.nameProperty; };
            ToDoListDialog.prototype.getService = function () { return Evaluation.ToDoListService.baseUrl; };
            ToDoListDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (!Q.Authorization.userDefinition.IsAdmin) {
                    Serenity.EditorUtils.setReadonly(this.element.find('[name="UserId"]'), true);
                }
                Serenity.EditorUtils.setReadonly(this.element.find('[name="CreateBy"]'), true);
            };
            return ToDoListDialog;
        }(Serenity.EntityDialog));
        ToDoListDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], ToDoListDialog);
        Evaluation.ToDoListDialog = ToDoListDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var ToDoListGrid = (function (_super) {
            __extends(ToDoListGrid, _super);
            function ToDoListGrid(container) {
                return _super.call(this, container) || this;
            }
            ToDoListGrid.prototype.getColumnsKey = function () { return 'Evaluation.ToDoList'; };
            ToDoListGrid.prototype.getDialogType = function () { return Evaluation.ToDoListDialog; };
            ToDoListGrid.prototype.getIdProperty = function () { return Evaluation.ToDoListRow.idProperty; };
            ToDoListGrid.prototype.getLocalTextPrefix = function () { return Evaluation.ToDoListRow.localTextPrefix; };
            ToDoListGrid.prototype.getService = function () { return Evaluation.ToDoListService.baseUrl; };
            ToDoListGrid.prototype.addButtonClick = function () {
                var _this = this;
                Evaluation.ToDoListService.GetCurrentUserId(null, function (response) {
                    _this.editItem({
                        UserId: response,
                        StartDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                        CreateBy: response,
                        IsEnabled: true
                    });
                });
            };
            /**
           * Removing add button from grid using its css class
           */
            ToDoListGrid.prototype.getButtons = function () {
                //Q.Authorization.hasPermission("")
                var buttons = _super.prototype.getButtons.call(this);
                console.log(Q.Authorization.userDefinition.Permissions);
                if (!Q.Authorization.hasPermission("Evaluation:ToDoList:Modify")) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                    return buttons;
                }
                return buttons;
            };
            ToDoListGrid.prototype.onClick = function (e, row, cell) {
                if (Q.Authorization.hasPermission("Evaluation:ToDoList:Modify")) {
                    _super.prototype.onClick.call(this, e, row, cell);
                }
                else {
                    var target = $(e.target);
                    if (target.hasClass("s-EditLink")) {
                        e.preventDefault();
                        Q.notifyError("您无权进行查看,请联系管理员！");
                    }
                }
            };
            ToDoListGrid.prototype.getColumns = function () {
                //super.getQuickFilters();
                var columns = _super.prototype.getColumns.call(this);
                var flds = Evaluation.ToDoListRow.Fields;
                var section = "Evaluation";
                var index = 0;
                Q.first(columns, function (x) { return x.field === flds.Url; })
                    .format = function (ctx) {
                    //TODO: 考虑过期的情况
                    return "<a href='" + ctx.value.substr(ctx.value.indexOf('/') + 1) + "'>\u70B9\u51FB\u8FDB\u5165</a>";
                };
                return columns;
            };
            ToDoListGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            ToDoListGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            /**
            * This method is called to get list of quick filters to be created for this grid.
            * By default, it returns quick filter objects corresponding to properties that
            * have a [QuickFilter] attribute at server side OrderColumns.cs
            */
            ToDoListGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                console.log(filters);
                // get a reference to order row field names
                var fld = hr.Evaluation.ToDoListRow.Fields;
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                //Q.first(filters, x => x.field == fld.OrderDate).init = w => {
                //    // w is a reference to the editor for this quick filter widget
                //    // here we cast it to DateEditor, and set its value as date.
                //    // note that in Javascript, months are 0 based, so date below
                //    // is actually 2016-05-01
                //    (w as Serenity.DateEditor).valueAsDate = new Date(2016, 4, 1);
                //    // setting start date was simple. but this quick filter is actually
                //    // a combination of two date editors. to get reference to second one,
                //    // need to find its next sibling element by its class
                //    let endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                //    endDate.valueAsDate = new Date(2016, 6, 1);
                //};
                Q.first(filters, function (x) { return x.field == fld.IsEnabled; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    //(w as Serenity.BooleanEditor).value = true;
                    w.value = "1";
                };
                return filters;
            };
            return ToDoListGrid;
        }(Serenity.EntityGrid));
        ToDoListGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ToDoListGrid);
        Evaluation.ToDoListGrid = ToDoListGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationRelationDialog = (function (_super) {
            __extends(UserEvaluationRelationDialog, _super);
            function UserEvaluationRelationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Evaluation.UserEvaluationRelationForm(_this.idPrefix);
                return _this;
                //protected afterLoadEntity() {
                //    $("[name='EvaluationUserIds']").click(() => {
                //        (new UserListDialog()).dialogOpen();
                //    });
                //}
            }
            UserEvaluationRelationDialog.prototype.getFormKey = function () { return Evaluation.UserEvaluationRelationForm.formKey; };
            UserEvaluationRelationDialog.prototype.getIdProperty = function () { return Evaluation.UserEvaluationRelationRow.idProperty; };
            UserEvaluationRelationDialog.prototype.getLocalTextPrefix = function () { return Evaluation.UserEvaluationRelationRow.localTextPrefix; };
            UserEvaluationRelationDialog.prototype.getNameProperty = function () { return Evaluation.UserEvaluationRelationRow.nameProperty; };
            UserEvaluationRelationDialog.prototype.getService = function () { return Evaluation.UserEvaluationRelationService.baseUrl; };
            return UserEvaluationRelationDialog;
        }(Serenity.EntityDialog));
        UserEvaluationRelationDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.responsive()
        ], UserEvaluationRelationDialog);
        Evaluation.UserEvaluationRelationDialog = UserEvaluationRelationDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationRelationExcelImportDialog = (function (_super) {
            __extends(UserEvaluationRelationExcelImportDialog, _super);
            function UserEvaluationRelationExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Evaluation.UserEvaluationRelationImportForm(_this.idPrefix);
                return _this;
            }
            UserEvaluationRelationExcelImportDialog.prototype.getDialogTitle = function () {
                return "导入Excel";
            };
            UserEvaluationRelationExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: '导入',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.ExamId.value == null) {
                                Q.notifyError("请选择考核!");
                                return;
                            }
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            Evaluation.UserEvaluationRelationExcelImportService.ExcelImport({
                                ExamId: Q.parseInteger(_this.form.ExamId.value),
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('新增: ' + (response.Inserted || 0) +
                                    ', 更新: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: '取消',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            return UserEvaluationRelationExcelImportDialog;
        }(Serenity.PropertyDialog));
        UserEvaluationRelationExcelImportDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserEvaluationRelationExcelImportDialog);
        Evaluation.UserEvaluationRelationExcelImportDialog = UserEvaluationRelationExcelImportDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserEvaluationRelationGrid = (function (_super) {
            __extends(UserEvaluationRelationGrid, _super);
            function UserEvaluationRelationGrid(container) {
                return _super.call(this, container) || this;
            }
            UserEvaluationRelationGrid.prototype.getColumnsKey = function () { return 'Evaluation.UserEvaluationRelation'; };
            UserEvaluationRelationGrid.prototype.getDialogType = function () { return Evaluation.UserEvaluationRelationDialog; };
            UserEvaluationRelationGrid.prototype.getIdProperty = function () { return Evaluation.UserEvaluationRelationRow.idProperty; };
            UserEvaluationRelationGrid.prototype.getLocalTextPrefix = function () { return Evaluation.UserEvaluationRelationRow.localTextPrefix; };
            UserEvaluationRelationGrid.prototype.getService = function () { return Evaluation.UserEvaluationRelationService.baseUrl; };
            UserEvaluationRelationGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            UserEvaluationRelationGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            UserEvaluationRelationGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            UserEvaluationRelationGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: '发送邮件',
                    cssClass: 'outlook-button',
                    onClick: function () {
                        var selectedKeys = _this.rowSelection.getSelectedKeys();
                        console.log(selectedKeys);
                        if (selectedKeys.length == 0) {
                            //this.rowSelection.selectKeys(["1", "2"]);
                            Q.alert("请选择需要发送邮件的被考核人");
                            return;
                        }
                        else {
                            var grid_1 = _this;
                            var view = grid_1.getView();
                            var users_1 = [];
                            var user_1;
                            selectedKeys.forEach(function (value, index) {
                                user_1 = grid_1.getView().getItemById(value);
                                users_1.push({ "UserId": user_1.UserId, "ExamId": user_1.ExamId });
                            });
                            Evaluation.UserEvaluationRelationService.BatchSendEmail({
                                Users: users_1
                            }, function (response) {
                                Q.notifySuccess("邮件已发送");
                            });
                        }
                    }
                });
                // add our import button
                buttons.push({
                    title: '导入Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new Evaluation.UserEvaluationRelationExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    },
                    separator: true
                });
                buttons.push({
                    title: '删除选中项',
                    cssClass: 'delete-button',
                    separator: true,
                    onClick: function () {
                        var selectedKeys = _this.rowSelection.getSelectedKeys();
                        if (selectedKeys.length === 0) {
                            Q.alert("请选择要删除的项");
                            return;
                        }
                        Q.confirm("确认要删除选中项吗", function () {
                            var ids = [];
                            selectedKeys.forEach(function (value, index) {
                                ids.push(parseInt(value));
                            });
                            Evaluation.UserEvaluationRelationService.BatchDelete({
                                Ids: ids
                            }, function (response) {
                                Q.notifySuccess("删除成功");
                                _this.refresh();
                            });
                        });
                    }
                });
                buttons.push({
                    title: '下载模板',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        Q.postToService({
                            service: Evaluation.UserEvaluationRelationService.baseUrl + '/ExcelTemplate',
                            request: null,
                            target: '_blank'
                        });
                    },
                    separator: true
                });
                return buttons;
            };
            UserEvaluationRelationGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            UserEvaluationRelationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('删除该条记录吗?', function () {
                            Evaluation.UserEvaluationRelationService.Delete({
                                EntityId: item.Id,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                }
            };
            return UserEvaluationRelationGrid;
        }(Serenity.EntityGrid));
        UserEvaluationRelationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserEvaluationRelationGrid);
        Evaluation.UserEvaluationRelationGrid = UserEvaluationRelationGrid;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserListDialog = (function (_super) {
            __extends(UserListDialog, _super);
            function UserListDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserListDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                Evaluation.UserEvaluationRelationService.List({}, function (response) {
                    _this.userList = new hr.Administration.UserGrid($("#div").first()).init();
                    var selectedKeys = $("[name='EvaluationUserIds']").val().split(',');
                    _this.userList.rowSelection.selectKeys(selectedKeys);
                    Q.initFullHeightGridPage($('#div'));
                });
            };
            UserListDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='div' style='height:500px;'></div>";
            };
            UserListDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = '用户列表';
                opt.buttons = [{
                        text: "Ok",
                        showText: "Ok",
                        click: function () {
                            //Q.notifyInfo("ok");
                            //console.log(this.examList.rowSelection.getSelectedKeys());
                            var selectedItems = _this.userList.rowSelection.getSelectedKeys();
                            if (selectedItems.length == 0) {
                                Q.notifyWarning("请选择用户");
                                return;
                            }
                            //console.log(this.userList.rowSelection.getSelectedKeys().join(','));
                            var users = _this.userList.getItems().filter(function (value, index, arr) {
                                return _this.userList.rowSelection.getSelectedKeys().indexOf(value.UserId.toString()) >= 0;
                            });
                            console.log(users);
                            //[].filter(arr => {
                            //    return ar
                            //})
                            $("[name='EvaluationUserIds']").val(_this.userList.rowSelection.getSelectedKeys().join(','));
                            _this.dialogClose();
                        }
                    }, {
                        text: "Cancel",
                        showText: "Cancel",
                        click: function () {
                            Q.notifyInfo("cancel");
                            _this.dialogClose();
                        }
                    }];
                return opt;
            };
            return UserListDialog;
        }(Serenity.TemplatedDialog));
        UserListDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], UserListDialog);
        Evaluation.UserListDialog = UserListDialog;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Evaluation;
    (function (Evaluation) {
        var UserListFormatter = (function () {
            function UserListFormatter() {
            }
            UserListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = hr.Administration.UserRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.Username);
                }).join(", ");
            };
            return UserListFormatter;
        }());
        UserListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], UserListFormatter);
        Evaluation.UserListFormatter = UserListFormatter;
    })(Evaluation = hr.Evaluation || (hr.Evaluation = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/Scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/Content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/Content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            return LoginPanel;
        }(Serenity.PropertyPanel));
        LoginPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], LoginPanel);
        Membership.LoginPanel = LoginPanel;
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
var hr;
(function (hr) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = hr.Membership || (hr.Membership = {}));
})(hr || (hr = {}));
//# sourceMappingURL=hr.Web.js.map