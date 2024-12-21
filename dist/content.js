var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// LinkedIn Automation Script
function initLinkedInConnector() {
    var floatingButton = document.createElement('button');
    floatingButton.textContent = 'Connect with All';
    floatingButton.style.cssText = "\n        position: fixed;\n        bottom: 20px;\n        right: 20px;\n        z-index: 9999;\n        padding: 10px 20px;\n        background: #0a66c2;\n        color: white;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        font-weight: bold;\n    ";
    document.body.appendChild(floatingButton);
    function connectWithAll() {
        return __awaiter(this, void 0, void 0, function () {
            var connectButtons, _i, connectButtons_1, button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectButtons = Array.from(document.querySelectorAll('button'))
                            .filter(function (button) { var _a; return (_a = button.textContent) === null || _a === void 0 ? void 0 : _a.includes('Connect'); });
                        if (connectButtons.length === 0) {
                            alert('No connection buttons found!');
                            return [2 /*return*/];
                        }
                        floatingButton.disabled = true;
                        floatingButton.textContent = 'Connecting...';
                        _i = 0, connectButtons_1 = connectButtons;
                        _a.label = 1;
                    case 1:
                        if (!(_i < connectButtons_1.length)) return [3 /*break*/, 4];
                        button = connectButtons_1[_i];
                        button.click();
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        floatingButton.disabled = false;
                        floatingButton.textContent = 'Connect with All';
                        alert("Sent ".concat(connectButtons.length, " connection requests!"));
                        return [2 /*return*/];
                }
            });
        });
    }
    floatingButton.addEventListener('click', connectWithAll);
}
// Initialize the connector
initLinkedInConnector();
