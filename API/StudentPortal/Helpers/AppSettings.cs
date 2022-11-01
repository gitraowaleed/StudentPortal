using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace StudentPortal.Helpers
{
    public class AppSettings
    {
        public string Secret { get; set; } = string.Empty;
        public bool IsEmailConfirm { get; set; }
        public bool IsMobileConfirm { get; set; }
        public string DomainURL { get; set; } = string.Empty;
    }
}

