using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Hangfire;
using Hangfire.Dashboard.Dark;
using Hangfire.SqlServer;

[assembly: OwinStartup(typeof(hr.Startup))]

namespace hr
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
            GlobalConfiguration.Configuration.UseSqlServerStorage("Default").UseDarkDashboard();

            app.UseHangfireDashboard();
            app.UseHangfireServer();
        }
    }
}
