var Wsh = {
    forceCUI: function() {
        if (WScript.FullName.toLowerCase().endsWith('\\wscript.exe')) {
            var args = [];
            for (var i = 0; i < WScript.Arguments.length; i++) {
                args.push(WScript.Arguments.Item(i));
            }

            var shell = WScript.CreateObject('WScript.Shell');
            shell.Run('cscript.exe ' + WScript.ScriptFullName + ' ' + args.join(''));
            WScript.Quit(0);
        }
    },
};
