using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace System.Linq
{
    public static class Extensions
    {
        public static IEnumerable<TSource> DistinctBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            HashSet<TKey> seenKeys = new HashSet<TKey>();
            foreach (TSource element in source)
            {
                if (seenKeys.Add(keySelector(element)))
                {
                    yield return element;
                }
            }
        }
    }
}

namespace System
{
    public static class Extensions
    {
        public static int GetDiffDays(this DateTime source, DateTime target)
        {
            TimeSpan ts1 = new TimeSpan(source.Ticks);
            TimeSpan ts2 = new TimeSpan(target.Ticks);
            TimeSpan ts3 = ts2.Subtract(ts1).Duration();

            return ts3.Days;
        }
    }
}