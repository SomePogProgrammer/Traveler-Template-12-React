import React from 'react'
import Script from 'dangerous-html/react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import FeatureCard2 from '../components/feature-card2'
import FeatureCard3 from '../components/feature-card3'
import FeatureCard4 from '../components/feature-card4'
import Header from '../components/header'
import FeatureCard5 from '../components/feature-card5'
import FeatureCard6 from '../components/feature-card6'
import FeatureCard7 from '../components/feature-card7'
import FeatureCard8 from '../components/feature-card8'
import './about-me.css'

const AboutMe = (props) => {
  return (
    <div className="about-me-container">
      <Helmet>
        <title>Traveler (Template 12)</title>
        <meta property="og:title" content="Traveler (Template 12)" />
      </Helmet>
      <div data-role="MobileMenu" className="about-me-mobile-menu">
        <div className="about-me-nav">
          <NavigationLinks
            rootClassName="rootClassName8"
            BehindTheScenes="Behind The Scenes"
          ></NavigationLinks>
          <div className="about-me-btn-group">
            <button className="about-me-login button">Login</button>
            <button className="button about-me-register">Register</button>
          </div>
        </div>
        <div className="about-me-nav1">
          <div className="about-me-about">
            <div className="about-me-text-frame"></div>
            <div className="about-me-decor"></div>
            <div className="about-me-decor1"></div>
          </div>
          <div className="about-me-features">
            <h1 className="about-me-text">
              <span>Web Development</span>
              <br></br>
              <span>[Front-End]</span>
              <br></br>
            </h1>
            <div className="about-me-container1">
              <FeatureCard rootClassName="rootClassName2"></FeatureCard>
              <FeatureCard2 rootClassName="feature-card2-root-class-name2"></FeatureCard2>
              <FeatureCard3 rootClassName="feature-card3-root-class-name2"></FeatureCard3>
              <FeatureCard4 rootClassName="feature-card4-root-class-name2"></FeatureCard4>
            </div>
          </div>
        </div>
      </div>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="about-me-about1">
        <div className="about-me-text-frame1">
          <h2 className="about-me-text05">
            <span>Front-End Web Developer</span>
            <br></br>
          </h2>
          <li className="about-me-li list-item">
            <span className="about-me-text08">
              <span className="about-me-text09">
                4+ Years of total programming experience.
              </span>
              <br className="about-me-text10"></br>
            </span>
          </li>
          <li className="about-me-li1 list-item">
            <span className="about-me-text11">
              <span className="about-me-text12">Knowledge in: </span>
              <br></br>
              <span className="about-me-text14">
                REACT.JS, JavaScript, HTML, CSS, JSX, JSON, Lua, LuaU.
              </span>
              <br></br>
            </span>
          </li>
        </div>
        <div className="about-me-decor2"></div>
        <div className="about-me-decor3"></div>
        <h2 className="about-me-text16">About Me</h2>
      </div>
      <div className="about-me-about2">
        <div className="about-me-text-frame2">
          <h2 className="about-me-text17">
            <span>Front-End Web Developer</span>
            <br></br>
          </h2>
          <li className="about-me-li2 list-item">
            <span className="about-me-text20">
              <span className="about-me-text21">
                4+ Years of total programming experience.
              </span>
              <br className="about-me-text22"></br>
            </span>
          </li>
          <li className="about-me-li3 list-item">
            <span className="about-me-text23">
              <span className="about-me-text24">Knowledge in: </span>
              <br></br>
              <span className="about-me-text26">
                REACT.JS, JavaScript, HTML, CSS, JSX, JSON, Lua, LuaU.
              </span>
              <br></br>
            </span>
          </li>
        </div>
        <div className="about-me-decor4"></div>
        <div className="about-me-decor5"></div>
        <h2 className="about-me-text28">About Me</h2>
      </div>
      <div className="about-me-banner">
        <div className="about-me-container2">
          <h1 className="about-me-text29">
            Web Developer &amp; Game Developer
          </h1>
          <span className="about-me-text30">
            I started programming when I was around 11 and fell in love with it.
            It&apos;s truly my passion. I&apos;m 100% self-taught, and I have 4
            years of experience as a Game Developer, programming in Lua/LuaU.
            About a year and a half ago, I fell in love with web development. I
            already knew a programming language, so I had the programmer mind,
            along with a firm understanding of syntax beforehand. I was able to
            learn HTML, JavaScript, JSX, CSS, and JSON very quickly. In about 2
            months, thanks to my prior experience. So far I&apos;ve done smaller
            projects and personal websites and APIs. Another passion of mine is
            to teach others programming, and I even started up a Web Development
            Club at my school where I taught other students JavaScript, HTML,
            and CSS. And I&apos;m here now, looking for commissions, and
            part-time job offers. Internships too!
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1687603921109-46401b201195?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxSZWFjdCUyMEphdmFzY3JpcHR8ZW58MHx8fHwxNjkwODI3NDM4fDA&amp;ixlib=rb-4.0.3&amp;w=300"
          className="about-me-image"
        />
      </div>
      <div className="about-me-banner1"></div>
      <div className="about-me-container3">
        <div className="about-me-container4">
          <React.Fragment>
            <Script>{`
  /* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-coy&languages=markup+css+clike+javascript+jsx+tsx+typescript */
  var _self =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope
        ? self
        : {},
    Prism = (function (e) {
      var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|\$)/i,
        t = 0,
        r = {},
        a = {
          manual: e.Prism && e.Prism.manual,
          disableWorkerMessageHandler:
            e.Prism && e.Prism.disableWorkerMessageHandler,
          util: {
            encode: function e(n) {
              return n instanceof i
                ? new i(n.type, e(n.content), n.alias)
                : Array.isArray(n)
                ? n.map(e)
                : n
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/\u00a0/g, " ");
            },
            type: function (e) {
              return Object.prototype.toString.call(e).slice(8, -1);
            },
            objId: function (e) {
              return (
                e.__id || Object.defineProperty(e, "__id", { value: ++t }),
                e.__id
              );
            },
            clone: function e(n, t) {
              var r, i;
              switch (((t = t || {}), a.util.type(n))) {
                case "Object":
                  if (((i = a.util.objId(n)), t[i])) return t[i];
                  for (var l in ((r = {}), (t[i] = r), n))
                    n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                  return r;
                case "Array":
                  return (
                    (i = a.util.objId(n)),
                    t[i]
                      ? t[i]
                      : ((r = []),
                        (t[i] = r),
                        n.forEach(function (n, a) {
                          r[a] = e(n, t);
                        }),
                        r)
                  );
                default:
                  return n;
              }
            },
            getLanguage: function (e) {
              for (; e; ) {
                var t = n.exec(e.className);
                if (t) return t[1].toLowerCase();
                e = e.parentElement;
              }
              return "none";
            },
            setLanguage: function (e, t) {
              (e.className = e.className.replace(RegExp(n, "gi"), "")),
                e.classList.add("language-" + t);
            },
            currentScript: function () {
              if ("undefined" == typeof document) return null;
              if ("currentScript" in document) return document.currentScript;
              try {
                throw new Error();
              } catch (r) {
                var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)\$/i.exec(r.stack) ||
                  [])[1];
                if (e) {
                  var n = document.getElementsByTagName("script");
                  for (var t in n) if (n[t].src == e) return n[t];
                }
                return null;
              }
            },
            isActive: function (e, n, t) {
              for (var r = "no-" + n; e; ) {
                var a = e.classList;
                if (a.contains(n)) return !0;
                if (a.contains(r)) return !1;
                e = e.parentElement;
              }
              return !!t;
            },
          },
          languages: {
            plain: r,
            plaintext: r,
            text: r,
            txt: r,
            extend: function (e, n) {
              var t = a.util.clone(a.languages[e]);
              for (var r in n) t[r] = n[r];
              return t;
            },
            insertBefore: function (e, n, t, r) {
              var i = (r = r || a.languages)[e],
                l = {};
              for (var o in i)
                if (i.hasOwnProperty(o)) {
                  if (o == n)
                    for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s]);
                  t.hasOwnProperty(o) || (l[o] = i[o]);
                }
              var u = r[e];
              return (
                (r[e] = l),
                a.languages.DFS(a.languages, function (n, t) {
                  t === u && n != e && (this[n] = l);
                }),
                l
              );
            },
            DFS: function e(n, t, r, i) {
              i = i || {};
              var l = a.util.objId;
              for (var o in n)
                if (n.hasOwnProperty(o)) {
                  t.call(n, o, n[o], r || o);
                  var s = n[o],
                    u = a.util.type(s);
                  "Object" !== u || i[l(s)]
                    ? "Array" !== u ||
                      i[l(s)] ||
                      ((i[l(s)] = !0), e(s, t, o, i))
                    : ((i[l(s)] = !0), e(s, t, null, i));
                }
            },
          },
          plugins: {},
          highlightAll: function (e, n) {
            a.highlightAllUnder(document, e, n);
          },
          highlightAllUnder: function (e, n, t) {
            var r = {
              callback: t,
              container: e,
              selector:
                'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
            };
            a.hooks.run("before-highlightall", r),
              (r.elements = Array.prototype.slice.apply(
                r.container.querySelectorAll(r.selector)
              )),
              a.hooks.run("before-all-elements-highlight", r);
            for (var i, l = 0; (i = r.elements[l++]); )
              a.highlightElement(i, !0 === n, r.callback);
          },
          highlightElement: function (n, t, r) {
            var i = a.util.getLanguage(n),
              l = a.languages[i];
            a.util.setLanguage(n, i);
            var o = n.parentElement;
            o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
            var s = {
              element: n,
              language: i,
              grammar: l,
              code: n.textContent,
            };
            function u(e) {
              (s.highlightedCode = e),
                a.hooks.run("before-insert", s),
                (s.element.innerHTML = s.highlightedCode),
                a.hooks.run("after-highlight", s),
                a.hooks.run("complete", s),
                r && r.call(s.element);
            }
            if (
              (a.hooks.run("before-sanity-check", s),
              (o = s.element.parentElement) &&
                "pre" === o.nodeName.toLowerCase() &&
                !o.hasAttribute("tabindex") &&
                o.setAttribute("tabindex", "0"),
              !s.code)
            )
              return a.hooks.run("complete", s), void (r && r.call(s.element));
            if ((a.hooks.run("before-highlight", s), s.grammar))
              if (t && e.Worker) {
                var c = new Worker(a.filename);
                (c.onmessage = function (e) {
                  u(e.data);
                }),
                  c.postMessage(
                    JSON.stringify({
                      language: s.language,
                      code: s.code,
                      immediateClose: !0,
                    })
                  );
              } else u(a.highlight(s.code, s.grammar, s.language));
            else u(a.util.encode(s.code));
          },
          highlight: function (e, n, t) {
            var r = { code: e, grammar: n, language: t };
            if ((a.hooks.run("before-tokenize", r), !r.grammar))
              throw new Error(
                'The language "' + r.language + '" has no grammar.'
              );
            return (
              (r.tokens = a.tokenize(r.code, r.grammar)),
              a.hooks.run("after-tokenize", r),
              i.stringify(a.util.encode(r.tokens), r.language)
            );
          },
          tokenize: function (e, n) {
            var t = n.rest;
            if (t) {
              for (var r in t) n[r] = t[r];
              delete n.rest;
            }
            var a = new s();
            return (
              u(a, a.head, e),
              o(e, a, n, a.head, 0),
              (function (e) {
                for (var n = [], t = e.head.next; t !== e.tail; )
                  n.push(t.value), (t = t.next);
                return n;
              })(a)
            );
          },
          hooks: {
            all: {},
            add: function (e, n) {
              var t = a.hooks.all;
              (t[e] = t[e] || []), t[e].push(n);
            },
            run: function (e, n) {
              var t = a.hooks.all[e];
              if (t && t.length) for (var r, i = 0; (r = t[i++]); ) r(n);
            },
          },
          Token: i,
        };
      function i(e, n, t, r) {
        (this.type = e),
          (this.content = n),
          (this.alias = t),
          (this.length = 0 | (r || "").length);
      }
      function l(e, n, t, r) {
        e.lastIndex = n;
        var a = e.exec(t);
        if (a && r && a[1]) {
          var i = a[1].length;
          (a.index += i), (a[0] = a[0].slice(i));
        }
        return a;
      }
      function o(e, n, t, r, s, g) {
        for (var f in t)
          if (t.hasOwnProperty(f) && t[f]) {
            var h = t[f];
            h = Array.isArray(h) ? h : [h];
            for (var d = 0; d < h.length; ++d) {
              if (g && g.cause == f + "," + d) return;
              var v = h[d],
                p = v.inside,
                m = !!v.lookbehind,
                y = !!v.greedy,
                k = v.alias;
              if (y && !v.pattern.global) {
                var x = v.pattern.toString().match(/[imsuy]*\$/)[0];
                v.pattern = RegExp(v.pattern.source, x + "g");
              }
              for (
                var b = v.pattern || v, w = r.next, A = s;
                w !== n.tail && !(g && A >= g.reach);
                A += w.value.length, w = w.next
              ) {
                var E = w.value;
                if (n.length > e.length) return;
                if (!(E instanceof i)) {
                  var P,
                    L = 1;
                  if (y) {
                    if (!(P = l(b, A, e, m)) || P.index >= e.length) break;
                    var S = P.index,
                      O = P.index + P[0].length,
                      j = A;
                    for (j += w.value.length; S >= j; )
                      j += (w = w.next).value.length;
                    if (((A = j -= w.value.length), w.value instanceof i))
                      continue;
                    for (
                      var C = w;
                      C !== n.tail && (j < O || "string" == typeof C.value);
                      C = C.next
                    )
                      L++, (j += C.value.length);
                    L--, (E = e.slice(A, j)), (P.index -= A);
                  } else if (!(P = l(b, 0, E, m))) continue;
                  S = P.index;
                  var N = P[0],
                    _ = E.slice(0, S),
                    M = E.slice(S + N.length),
                    W = A + E.length;
                  g && W > g.reach && (g.reach = W);
                  var z = w.prev;
                  if (
                    (_ && ((z = u(n, z, _)), (A += _.length)),
                    c(n, z, L),
                    (w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N))),
                    M && u(n, w, M),
                    L > 1)
                  ) {
                    var I = { cause: f + "," + d, reach: W };
                    o(e, n, t, w.prev, A, I),
                      g && I.reach > g.reach && (g.reach = I.reach);
                  }
                }
              }
            }
          }
      }
      function s() {
        var e = { value: null, prev: null, next: null },
          n = { value: null, prev: e, next: null };
        (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
      }
      function u(e, n, t) {
        var r = n.next,
          a = { value: t, prev: n, next: r };
        return (n.next = a), (r.prev = a), e.length++, a;
      }
      function c(e, n, t) {
        for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
        (n.next = r), (r.prev = n), (e.length -= a);
      }
      if (
        ((e.Prism = a),
        (i.stringify = function e(n, t) {
          if ("string" == typeof n) return n;
          if (Array.isArray(n)) {
            var r = "";
            return (
              n.forEach(function (n) {
                r += e(n, t);
              }),
              r
            );
          }
          var i = {
              type: n.type,
              content: e(n.content, t),
              tag: "span",
              classes: ["token", n.type],
              attributes: {},
              language: t,
            },
            l = n.alias;
          l &&
            (Array.isArray(l)
              ? Array.prototype.push.apply(i.classes, l)
              : i.classes.push(l)),
            a.hooks.run("wrap", i);
          var o = "";
          for (var s in i.attributes)
            o +=
              " " +
              s +
              '="' +
              (i.attributes[s] || "").replace(/"/g, "&quot;") +
              '"';
          return (
            "<" +
            i.tag +
            ' class="' +
            i.classes.join(" ") +
            '"' +
            o +
            ">" +
            i.content +
            "</" +
            i.tag +
            ">"
          );
        }),
        !e.document)
      )
        return e.addEventListener
          ? (a.disableWorkerMessageHandler ||
              e.addEventListener(
                "message",
                function (n) {
                  var t = JSON.parse(n.data),
                    r = t.language,
                    i = t.code,
                    l = t.immediateClose;
                  e.postMessage(a.highlight(i, a.languages[r], r)),
                    l && e.close();
                },
                !1
              ),
            a)
          : a;
      var g = a.util.currentScript();
      function f() {
        a.manual || a.highlightAll();
      }
      if (
        (g &&
          ((a.filename = g.src),
          g.hasAttribute("data-manual") && (a.manual = !0)),
        !a.manual)
      ) {
        var h = document.readyState;
        "loading" === h || ("interactive" === h && g && g.defer)
          ? document.addEventListener("DOMContentLoaded", f)
          : window.requestAnimationFrame
          ? window.requestAnimationFrame(f)
          : window.setTimeout(f, 16);
      }
      return a;
    })(_self);
  "undefined" != typeof module && module.exports && (module.exports = Prism),
    "undefined" != typeof global && (global.Prism = Prism);
  (Prism.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>\$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>\$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=\$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              { pattern: /^=/, alias: "attr-equals" },
              { pattern: /^(\s*)["']|["']\$/, lookbehind: !0 },
            ],
          },
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
    (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
      Prism.languages.markup.entity),
    (Prism.languages.markup.doctype.inside["internal-subset"].inside =
      Prism.languages.markup),
    Prism.hooks.add("wrap", function (a) {
      "entity" === a.type &&
        (a.attributes.title = a.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
      value: function (a, e) {
        var s = {};
        (s["language-" + e] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>\$)/i,
          lookbehind: !0,
          inside: Prism.languages[e],
        }),
          (s.cdata = /^<!\[CDATA\[|\]\]>\$/i);
        var t = {
          "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s },
        };
        t["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
        var n = {};
        (n[a] = {
          pattern: RegExp(
            "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
              /__/g,
              function () {
                return a;
              }
            ),
            "i"
          ),
          lookbehind: !0,
          greedy: !0,
          inside: t,
        }),
          Prism.languages.insertBefore("markup", "cdata", n);
      },
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
      value: function (a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            "(^|[\"'\\s])(?:" +
              a +
              ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2\$)/,
                  lookbehind: !0,
                  alias: [e, "language-" + e],
                  inside: Prism.languages[e],
                },
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend("markup", {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml);
  !(function (s) {
    var e =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (s.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp(
          "@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" +
            e.source +
            ")*?(?:;|(?=\\s*\\{))"
        ),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector",
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          "\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
          "i"
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)\$/,
          string: { pattern: RegExp("^" + e.source + "\$"), alias: "url" },
        },
      },
      selector: {
        pattern: RegExp(
          "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
            e.source +
            ")*(?=\\s*\\{)"
        ),
        lookbehind: !0,
      },
      string: { pattern: e, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (s.languages.css.atrule.inside.rest = s.languages.css);
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
  })(Prism);
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|\$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  };
  (Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
      Prism.languages.clike["class-name"],
      {
        pattern:
          /(^|[^\$\w\xA0-\uFFFF])(?!\s)[_\$A-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[\$\w\xA0-\uFFFF]|\$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|\$))|for|from(?=\s*(?:['"]|\$))|function|(?:get|set)(?=\s*(?:[#\[\$\w\xA0-\uFFFF]|\$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        "(^|[^\\w\$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w\$])"
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (Prism.languages.javascript["class-name"][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    Prism.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          "((?:^|[^\$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:\$|[\r\n,.;:})\\]]|//))"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*\$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: Prism.languages.regex,
          },
          "regex-delimiter": /^\/|\/\$/,
          "regex-flags": /^[a-z]+\$/,
        },
      },
      "function-variable": {
        pattern:
          /#?(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function",
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /(^|[^\$\w\xA0-\uFFFF])(?!\s)[_\$a-z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![\$\w\xA0-\uFFFF]))(?:(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    Prism.languages.insertBefore("javascript", "string", {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
      "template-string": {
        pattern:
          /\`(?:\\[\s\S]|\\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\\$\{)[^\\\`])*\`/,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^\`|\`\$/, alias: "string" },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\\$\{|\}\$/,
                alias: "punctuation",
              },
              rest: Prism.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      "string-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
      },
    }),
    Prism.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property",
      },
    }),
    Prism.languages.markup &&
      (Prism.languages.markup.tag.addInlined("script", "javascript"),
      Prism.languages.markup.tag.addAttribute(
        "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
        "javascript"
      )),
    (Prism.languages.js = Prism.languages.javascript);
  !(function (t) {
    var n = t.util.clone(t.languages.javascript),
      e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
    function a(t, n) {
      return (
        (t = t
          .replace(/<S>/g, function () {
            return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
          })
          .replace(/<BRACES>/g, function () {
            return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
          })
          .replace(/<SPREAD>/g, function () {
            return e;
          })),
        RegExp(t, n)
      );
    }
    (e = a(e).source),
      (t.languages.jsx = t.languages.extend("markup", n)),
      (t.languages.jsx.tag.pattern = a(
        "</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:\$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"
      )),
      (t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (t.languages.jsx.tag.inside["attr-value"].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (t.languages.jsx.tag.inside.tag.inside["class-name"] =
        /^[A-Z]\w*(?:\.[A-Z]\w*)*\$/),
      (t.languages.jsx.tag.inside.comment = n.comment),
      t.languages.insertBefore(
        "inside",
        "attr-name",
        { spread: { pattern: a("<SPREAD>"), inside: t.languages.jsx } },
        t.languages.jsx.tag
      ),
      t.languages.insertBefore(
        "inside",
        "special-attr",
        {
          script: {
            pattern: a("=<BRACES>"),
            alias: "language-javascript",
            inside: {
              "script-punctuation": {
                pattern: /^=(?=\{)/,
                alias: "punctuation",
              },
              rest: t.languages.jsx,
            },
          },
        },
        t.languages.jsx.tag
      );
    var s = function (t) {
        return t
          ? "string" == typeof t
            ? t
            : "string" == typeof t.content
            ? t.content
            : t.content.map(s).join("")
          : "";
      },
      g = function (n) {
        for (var e = [], a = 0; a < n.length; a++) {
          var o = n[a],
            i = !1;
          if (
            ("string" != typeof o &&
              ("tag" === o.type && o.content[0] && "tag" === o.content[0].type
                ? "</" === o.content[0].content[0].content
                  ? e.length > 0 &&
                    e[e.length - 1].tagName === s(o.content[0].content[1]) &&
                    e.pop()
                  : "/>" === o.content[o.content.length - 1].content ||
                    e.push({
                      tagName: s(o.content[0].content[1]),
                      openedBraces: 0,
                    })
                : e.length > 0 && "punctuation" === o.type && "{" === o.content
                ? e[e.length - 1].openedBraces++
                : e.length > 0 &&
                  e[e.length - 1].openedBraces > 0 &&
                  "punctuation" === o.type &&
                  "}" === o.content
                ? e[e.length - 1].openedBraces--
                : (i = !0)),
            (i || "string" == typeof o) &&
              e.length > 0 &&
              0 === e[e.length - 1].openedBraces)
          ) {
            var r = s(o);
            a < n.length - 1 &&
              ("string" == typeof n[a + 1] || "plain-text" === n[a + 1].type) &&
              ((r += s(n[a + 1])), n.splice(a + 1, 1)),
              a > 0 &&
                ("string" == typeof n[a - 1] ||
                  "plain-text" === n[a - 1].type) &&
                ((r = s(n[a - 1]) + r), n.splice(a - 1, 1), a--),
              (n[a] = new t.Token("plain-text", r, null, r));
          }
          o.content && "string" != typeof o.content && g(o.content);
        }
      };
    t.hooks.add("after-tokenize", function (t) {
      ("jsx" !== t.language && "tsx" !== t.language) || g(t.tokens);
    });
  })(Prism);
  !(function (e) {
    (e.languages.typescript = e.languages.extend("javascript", {
      "class-name": {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
      e.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_\$a-zA-Z\xA0-\uFFFF]|\$))/,
        /\btype\b(?=\s*(?:[\{*]|\$))/
      ),
      delete e.languages.typescript.parameter,
      delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"],
      (e.languages.typescript["class-name"].inside = s),
      e.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[\$\w\xA0-\uFFFF]+/,
          inside: {
            at: { pattern: /^@/, alias: "operator" },
            function: /^[\s\S]+/,
          },
        },
        "generic-function": {
          pattern:
            /#?(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function:
              /^#?(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: s },
          },
        },
      }),
      (e.languages.ts = e.languages.typescript);
  })(Prism);
  !(function (e) {
    var a = e.util.clone(e.languages.typescript);
    (e.languages.tsx = e.languages.extend("jsx", a)),
      delete e.languages.tsx.parameter,
      delete e.languages.tsx["literal-property"];
    var t = e.languages.tsx.tag;
    (t.pattern = RegExp(
      "(^|[^\\w\$]|(?=</))(?:" + t.pattern.source + ")",
      t.pattern.flags
    )),
      (t.lookbehind = !0);
  })(Prism);
`}</Script>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  'code[class*="language-"],\npre[class*="language-"] {\n  color: white;\n  background: 0 0;\n  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\npre[class*="language-"] {\n  position: relative;\n  overflow: hidden;\n  padding: 1px;\n}\n\npre[class*="language-"]>code {\n  position: relative;\n  z-index: 1;\n  border-left: 10px solid #262626;\n  box-shadow: -1px 0 0 0 #262626, 0 0 0 1px #dfdfdf;\n  background-color: #262626;\n  background-size: 3em 3em;\n  background-origin: content-box;\n  background-attachment: local;\n}\n\ncode[class*="language-"] {\n  max-height: inherit;\n  height: 100%;\n  padding: 0 1em;\n  display: block;\n  overflow: auto;\n}\n\n:not(pre)>code[class*="language-"],\npre[class*="language-"] {\n  background-color: transparent; \n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-bottom: 1em;\n}\n\n:not(pre)>code[class*="language-"] {\n  position: relative;\n  padding: 0.2em;\n  border-radius: 0.3em;\n  color: #c92c2c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: inline;\n  white-space: normal;\n}\n\npre[class*="language-"]:after,\npre[class*="language-"]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  bottom: 0.75em;\n  left: 0.18em;\n  width: 40%;\n  height: 20%;\n  max-height: 13em;\n  box-shadow: 0 13px 8px #979797;\n  -webkit-transform: rotate(-2deg);\n  -moz-transform: rotate(-2deg);\n  -ms-transform: rotate(-2deg);\n  -o-transform: rotate(-2deg);\n  transform: rotate(-2deg);\n}\n\npre[class*="language-"]:after {\n  right: 0.75em;\n  left: auto;\n  -webkit-transform: rotate(2deg);\n  -moz-transform: rotate(2deg);\n  -ms-transform: rotate(2deg);\n  -o-transform: rotate(2deg);\n  transform: rotate(2deg);\n}\n\n./*********************************************************\n* Tokens\n*/\n.namespace {\n\topacity: .7;\n}\n\n.token.doctype .token.doctype-tag {\n\tcolor: #569CD6;\n}\n\n.token.doctype .token.name {\n\tcolor: #9cdcfe;\n}\n\n.token.comment,\n.token.prolog {\n\tcolor: #6a9955;\n}\n\n.token.punctuation,\n.language-html .language-css .token.punctuation,\n.language-html .language-javascript .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.inserted,\n.token.unit {\n\tcolor: #b5cea8;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.deleted {\n\tcolor: #ce9178;\n}\n\n.language-css .token.string.url {\n\ttext-decoration: underline;\n}\n\n.token.operator,\n.token.entity {\n\tcolor: #d4d4d4;\n}\n\n.token.operator.arrow {\n\tcolor: #569CD6;\n}\n\n.token.atrule {\n\tcolor: #ce9178;\n}\n\n.token.atrule .token.rule {\n\tcolor: #c586c0;\n}\n\n.token.atrule .token.url {\n\tcolor: #9cdcfe;\n}\n\n.token.atrule .token.url .token.function {\n\tcolor: #aac6dc;\n}\n\n.token.atrule .token.url .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.keyword {\n\tcolor: #569CD6;\n}\n\n.token.keyword.module,\n.token.keyword.control-flow {\n\tcolor: #c586c0;\n}\n\n.token.function,\n.token.function .token.maybe-class-name {\n\tcolor: #aac6dc;\n}\n\n.token.regex {\n\tcolor: #d16969;\n}\n\n.token.important {\n\tcolor: #569cd6;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.constant {\n\tcolor: #9cdcfe;\n}\n\n.token.class-name,\n.token.maybe-class-name {\n\tcolor: #4ec9b0;\n}\n\n.token.console {\n\tcolor: #9cdcfe;\n}\n\n.token.parameter {\n\tcolor: #9cdcfe;\n}\n\n.token.interpolation {\n\tcolor: #9cdcfe;\n}\n\n.token.punctuation.interpolation-punctuation {\n\tcolor: #569cd6;\n}\n\n.token.boolean {\n\tcolor: #569cd6;\n}\n\n.token.property,\n.token.variable,\n.token.imports .token.maybe-class-name,\n.token.exports .token.maybe-class-name {\n\tcolor: #9cdcfe;\n}\n\n.token.selector {\n\tcolor: #d7ba7d;\n}\n\n.token.escape {\n\tcolor: #d7ba7d;\n}\n\n.token.tag {\n\tcolor: #569cd6;\n}\n\n.token.tag .token.punctuation {\n\tcolor: #808080;\n}\n\n.token.cdata {\n\tcolor: #808080;\n}\n\n.token.attr-name {\n\tcolor: #9cdcfe;\n}\n\n.token.attr-value,\n.token.attr-value .token.punctuation {\n\tcolor: #ce9178;\n}\n\n.token.attr-value .token.punctuation.attr-equals {\n\tcolor: #d4d4d4;\n}\n\n.token.entity {\n\tcolor: #569cd6;\n}\n\n.token.namespace {\n\tcolor: #4ec9b0;\n}\n/*********************************************************\n* Language Specific\n*/\n\npre[class*="language-javascript"],\ncode[class*="language-javascript"],\npre[class*="language-jsx"],\ncode[class*="language-jsx"],\npre[class*="language-typescript"],\ncode[class*="language-typescript"],\npre[class*="language-tsx"],\ncode[class*="language-tsx"] {\n\tcolor: #9cdcfe;\n}\n\npre[class*="language-css"],\ncode[class*="language-css"] {\n\tcolor: #ce9178;\n}\n\npre[class*="language-html"],\ncode[class*="language-html"] {\n\tcolor: #d4d4d4;\n}\n\n.language-regex .token.anchor {\n\tcolor: #aac6dc;\n}\n\n.language-html .token.punctuation {\n\tcolor: #808080;\n}\n/*********************************************************\n* Line highlighting\n*/\npre[class*="language-"] > code[class*="language-"] {\n\tposition: relative;\n\tz-index: 1;\n}\n\n.line-highlight.line-highlight {\n\tbackground: #f7ebc6;\n\tbox-shadow: inset 5px 0 0 #f7d87c;\n\tz-index: 0;\n}',
              }}
            />

            <pre
              style={{
                clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                overflowX: 'hidden',
                overflowY: 'hidden',
                background: 'transparent',
              }}
            >
              <code
                className="language-tsx line-numbers"
                style={{ overflowX: 'hidden', overflowY: 'hidden' }}
              >
                {'\n'}
                {'\n'}
                {'         '}export default function App() {'{'}
                {'\n'}
                {'        '}return ({'\n'}
                {'           '}&lt;BrowserRouter&gt;{'\n'}
                {'            '}&lt;Routes&gt;{'\n'}
                {'             '}&lt;Route{'\n'}
                {'               '}path="*"{'\n'}
                {'              '}element={'{'}
                {'\n'}
                {'              '}&lt;&gt;{'\n'}
                {'                '}&lt;Layout /&gt;{'\n'}
                {'                '}&lt;NoPage className="NoPage" /&gt;{'\n'}
                {'              '}&lt;/&gt;{'\n'}
                {'            '}
                {'}'}
                {'\n'}
                {'          '}&gt;&lt;/Route&gt;{'\n'}
                {'          '}&lt;Route{'\n'}
                {'            '}index{'\n'}
                {'            '}element={'{'}
                {'\n'}
                {'              '}&lt;&gt;{'\n'}
                {'                '}&lt;Home /&gt;{'\n'}
                {'                '}&lt;Layout /&gt;{'\n'}
                {'              '}&lt;/&gt;{'\n'}
                {'            '}
                {'}'}
                {'\n'}
                {'          '}/&gt;{'\n'}
                {'          '}&lt;Route{'\n'}
                {'            '}path="pages/"{'\n'}
                {'            '}element={'{'}
                {'\n'}
                {'              '}&lt;&gt;{'\n'}
                {'                '}&lt;Layout /&gt;{'\n'}
                {'                '}&lt;NoPage /&gt;{'\n'}
                {'              '}&lt;/&gt;{'\n'}
                {'            '}
                {'}'}
                {'\n'}
                {'          '}&gt;&lt;/Route&gt;{'\n'}
                {'\n'}
                {'        '}&lt;Route path="pages" element={'{'}&lt;Layout /&gt;
                {'}'}&gt;{'\n'}
                {'          '}&lt;Route path="blogs" element={'{'}&lt;Blogs
                /&gt;{'}'} /&gt;{'\n'}
                {'          '}&lt;Route path="contact" element={'{'}&lt;Contact
                /&gt;{'}'} /&gt;{'\n'}
                {'          '}&lt;Route path="*" element={'{'}&lt;NoPage /&gt;
                {'}'} /&gt;{'\n'}
                {'        '}&lt;/Route&gt;{'\n'}
                {'      '}&lt;/Routes&gt;{'\n'}
                {'    '}&lt;/BrowserRouter&gt;{'\n'}
                {'  '});{'\n'}
                {'}'}
                {'\n'}
                {'\n'}
                {'\n'}
              </code>
            </pre>
          </React.Fragment>
        </div>
        <div className="about-me-container5">
          <React.Fragment>
            <Script>{`
  /* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-coy&languages=markup+css+clike+javascript+jsx+tsx+typescript */
  var _self =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope
        ? self
        : {},
    Prism = (function (e) {
      var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|\$)/i,
        t = 0,
        r = {},
        a = {
          manual: e.Prism && e.Prism.manual,
          disableWorkerMessageHandler:
            e.Prism && e.Prism.disableWorkerMessageHandler,
          util: {
            encode: function e(n) {
              return n instanceof i
                ? new i(n.type, e(n.content), n.alias)
                : Array.isArray(n)
                ? n.map(e)
                : n
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/\u00a0/g, " ");
            },
            type: function (e) {
              return Object.prototype.toString.call(e).slice(8, -1);
            },
            objId: function (e) {
              return (
                e.__id || Object.defineProperty(e, "__id", { value: ++t }),
                e.__id
              );
            },
            clone: function e(n, t) {
              var r, i;
              switch (((t = t || {}), a.util.type(n))) {
                case "Object":
                  if (((i = a.util.objId(n)), t[i])) return t[i];
                  for (var l in ((r = {}), (t[i] = r), n))
                    n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                  return r;
                case "Array":
                  return (
                    (i = a.util.objId(n)),
                    t[i]
                      ? t[i]
                      : ((r = []),
                        (t[i] = r),
                        n.forEach(function (n, a) {
                          r[a] = e(n, t);
                        }),
                        r)
                  );
                default:
                  return n;
              }
            },
            getLanguage: function (e) {
              for (; e; ) {
                var t = n.exec(e.className);
                if (t) return t[1].toLowerCase();
                e = e.parentElement;
              }
              return "none";
            },
            setLanguage: function (e, t) {
              (e.className = e.className.replace(RegExp(n, "gi"), "")),
                e.classList.add("language-" + t);
            },
            currentScript: function () {
              if ("undefined" == typeof document) return null;
              if ("currentScript" in document) return document.currentScript;
              try {
                throw new Error();
              } catch (r) {
                var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)\$/i.exec(r.stack) ||
                  [])[1];
                if (e) {
                  var n = document.getElementsByTagName("script");
                  for (var t in n) if (n[t].src == e) return n[t];
                }
                return null;
              }
            },
            isActive: function (e, n, t) {
              for (var r = "no-" + n; e; ) {
                var a = e.classList;
                if (a.contains(n)) return !0;
                if (a.contains(r)) return !1;
                e = e.parentElement;
              }
              return !!t;
            },
          },
          languages: {
            plain: r,
            plaintext: r,
            text: r,
            txt: r,
            extend: function (e, n) {
              var t = a.util.clone(a.languages[e]);
              for (var r in n) t[r] = n[r];
              return t;
            },
            insertBefore: function (e, n, t, r) {
              var i = (r = r || a.languages)[e],
                l = {};
              for (var o in i)
                if (i.hasOwnProperty(o)) {
                  if (o == n)
                    for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s]);
                  t.hasOwnProperty(o) || (l[o] = i[o]);
                }
              var u = r[e];
              return (
                (r[e] = l),
                a.languages.DFS(a.languages, function (n, t) {
                  t === u && n != e && (this[n] = l);
                }),
                l
              );
            },
            DFS: function e(n, t, r, i) {
              i = i || {};
              var l = a.util.objId;
              for (var o in n)
                if (n.hasOwnProperty(o)) {
                  t.call(n, o, n[o], r || o);
                  var s = n[o],
                    u = a.util.type(s);
                  "Object" !== u || i[l(s)]
                    ? "Array" !== u ||
                      i[l(s)] ||
                      ((i[l(s)] = !0), e(s, t, o, i))
                    : ((i[l(s)] = !0), e(s, t, null, i));
                }
            },
          },
          plugins: {},
          highlightAll: function (e, n) {
            a.highlightAllUnder(document, e, n);
          },
          highlightAllUnder: function (e, n, t) {
            var r = {
              callback: t,
              container: e,
              selector:
                'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
            };
            a.hooks.run("before-highlightall", r),
              (r.elements = Array.prototype.slice.apply(
                r.container.querySelectorAll(r.selector)
              )),
              a.hooks.run("before-all-elements-highlight", r);
            for (var i, l = 0; (i = r.elements[l++]); )
              a.highlightElement(i, !0 === n, r.callback);
          },
          highlightElement: function (n, t, r) {
            var i = a.util.getLanguage(n),
              l = a.languages[i];
            a.util.setLanguage(n, i);
            var o = n.parentElement;
            o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
            var s = {
              element: n,
              language: i,
              grammar: l,
              code: n.textContent,
            };
            function u(e) {
              (s.highlightedCode = e),
                a.hooks.run("before-insert", s),
                (s.element.innerHTML = s.highlightedCode),
                a.hooks.run("after-highlight", s),
                a.hooks.run("complete", s),
                r && r.call(s.element);
            }
            if (
              (a.hooks.run("before-sanity-check", s),
              (o = s.element.parentElement) &&
                "pre" === o.nodeName.toLowerCase() &&
                !o.hasAttribute("tabindex") &&
                o.setAttribute("tabindex", "0"),
              !s.code)
            )
              return a.hooks.run("complete", s), void (r && r.call(s.element));
            if ((a.hooks.run("before-highlight", s), s.grammar))
              if (t && e.Worker) {
                var c = new Worker(a.filename);
                (c.onmessage = function (e) {
                  u(e.data);
                }),
                  c.postMessage(
                    JSON.stringify({
                      language: s.language,
                      code: s.code,
                      immediateClose: !0,
                    })
                  );
              } else u(a.highlight(s.code, s.grammar, s.language));
            else u(a.util.encode(s.code));
          },
          highlight: function (e, n, t) {
            var r = { code: e, grammar: n, language: t };
            if ((a.hooks.run("before-tokenize", r), !r.grammar))
              throw new Error(
                'The language "' + r.language + '" has no grammar.'
              );
            return (
              (r.tokens = a.tokenize(r.code, r.grammar)),
              a.hooks.run("after-tokenize", r),
              i.stringify(a.util.encode(r.tokens), r.language)
            );
          },
          tokenize: function (e, n) {
            var t = n.rest;
            if (t) {
              for (var r in t) n[r] = t[r];
              delete n.rest;
            }
            var a = new s();
            return (
              u(a, a.head, e),
              o(e, a, n, a.head, 0),
              (function (e) {
                for (var n = [], t = e.head.next; t !== e.tail; )
                  n.push(t.value), (t = t.next);
                return n;
              })(a)
            );
          },
          hooks: {
            all: {},
            add: function (e, n) {
              var t = a.hooks.all;
              (t[e] = t[e] || []), t[e].push(n);
            },
            run: function (e, n) {
              var t = a.hooks.all[e];
              if (t && t.length) for (var r, i = 0; (r = t[i++]); ) r(n);
            },
          },
          Token: i,
        };
      function i(e, n, t, r) {
        (this.type = e),
          (this.content = n),
          (this.alias = t),
          (this.length = 0 | (r || "").length);
      }
      function l(e, n, t, r) {
        e.lastIndex = n;
        var a = e.exec(t);
        if (a && r && a[1]) {
          var i = a[1].length;
          (a.index += i), (a[0] = a[0].slice(i));
        }
        return a;
      }
      function o(e, n, t, r, s, g) {
        for (var f in t)
          if (t.hasOwnProperty(f) && t[f]) {
            var h = t[f];
            h = Array.isArray(h) ? h : [h];
            for (var d = 0; d < h.length; ++d) {
              if (g && g.cause == f + "," + d) return;
              var v = h[d],
                p = v.inside,
                m = !!v.lookbehind,
                y = !!v.greedy,
                k = v.alias;
              if (y && !v.pattern.global) {
                var x = v.pattern.toString().match(/[imsuy]*\$/)[0];
                v.pattern = RegExp(v.pattern.source, x + "g");
              }
              for (
                var b = v.pattern || v, w = r.next, A = s;
                w !== n.tail && !(g && A >= g.reach);
                A += w.value.length, w = w.next
              ) {
                var E = w.value;
                if (n.length > e.length) return;
                if (!(E instanceof i)) {
                  var P,
                    L = 1;
                  if (y) {
                    if (!(P = l(b, A, e, m)) || P.index >= e.length) break;
                    var S = P.index,
                      O = P.index + P[0].length,
                      j = A;
                    for (j += w.value.length; S >= j; )
                      j += (w = w.next).value.length;
                    if (((A = j -= w.value.length), w.value instanceof i))
                      continue;
                    for (
                      var C = w;
                      C !== n.tail && (j < O || "string" == typeof C.value);
                      C = C.next
                    )
                      L++, (j += C.value.length);
                    L--, (E = e.slice(A, j)), (P.index -= A);
                  } else if (!(P = l(b, 0, E, m))) continue;
                  S = P.index;
                  var N = P[0],
                    _ = E.slice(0, S),
                    M = E.slice(S + N.length),
                    W = A + E.length;
                  g && W > g.reach && (g.reach = W);
                  var z = w.prev;
                  if (
                    (_ && ((z = u(n, z, _)), (A += _.length)),
                    c(n, z, L),
                    (w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N))),
                    M && u(n, w, M),
                    L > 1)
                  ) {
                    var I = { cause: f + "," + d, reach: W };
                    o(e, n, t, w.prev, A, I),
                      g && I.reach > g.reach && (g.reach = I.reach);
                  }
                }
              }
            }
          }
      }
      function s() {
        var e = { value: null, prev: null, next: null },
          n = { value: null, prev: e, next: null };
        (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
      }
      function u(e, n, t) {
        var r = n.next,
          a = { value: t, prev: n, next: r };
        return (n.next = a), (r.prev = a), e.length++, a;
      }
      function c(e, n, t) {
        for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
        (n.next = r), (r.prev = n), (e.length -= a);
      }
      if (
        ((e.Prism = a),
        (i.stringify = function e(n, t) {
          if ("string" == typeof n) return n;
          if (Array.isArray(n)) {
            var r = "";
            return (
              n.forEach(function (n) {
                r += e(n, t);
              }),
              r
            );
          }
          var i = {
              type: n.type,
              content: e(n.content, t),
              tag: "span",
              classes: ["token", n.type],
              attributes: {},
              language: t,
            },
            l = n.alias;
          l &&
            (Array.isArray(l)
              ? Array.prototype.push.apply(i.classes, l)
              : i.classes.push(l)),
            a.hooks.run("wrap", i);
          var o = "";
          for (var s in i.attributes)
            o +=
              " " +
              s +
              '="' +
              (i.attributes[s] || "").replace(/"/g, "&quot;") +
              '"';
          return (
            "<" +
            i.tag +
            ' class="' +
            i.classes.join(" ") +
            '"' +
            o +
            ">" +
            i.content +
            "</" +
            i.tag +
            ">"
          );
        }),
        !e.document)
      )
        return e.addEventListener
          ? (a.disableWorkerMessageHandler ||
              e.addEventListener(
                "message",
                function (n) {
                  var t = JSON.parse(n.data),
                    r = t.language,
                    i = t.code,
                    l = t.immediateClose;
                  e.postMessage(a.highlight(i, a.languages[r], r)),
                    l && e.close();
                },
                !1
              ),
            a)
          : a;
      var g = a.util.currentScript();
      function f() {
        a.manual || a.highlightAll();
      }
      if (
        (g &&
          ((a.filename = g.src),
          g.hasAttribute("data-manual") && (a.manual = !0)),
        !a.manual)
      ) {
        var h = document.readyState;
        "loading" === h || ("interactive" === h && g && g.defer)
          ? document.addEventListener("DOMContentLoaded", f)
          : window.requestAnimationFrame
          ? window.requestAnimationFrame(f)
          : window.setTimeout(f, 16);
      }
      return a;
    })(_self);
  "undefined" != typeof module && module.exports && (module.exports = Prism),
    "undefined" != typeof global && (global.Prism = Prism);
  (Prism.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>\$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>\$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=\$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              { pattern: /^=/, alias: "attr-equals" },
              { pattern: /^(\s*)["']|["']\$/, lookbehind: !0 },
            ],
          },
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
    (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
      Prism.languages.markup.entity),
    (Prism.languages.markup.doctype.inside["internal-subset"].inside =
      Prism.languages.markup),
    Prism.hooks.add("wrap", function (a) {
      "entity" === a.type &&
        (a.attributes.title = a.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
      value: function (a, e) {
        var s = {};
        (s["language-" + e] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>\$)/i,
          lookbehind: !0,
          inside: Prism.languages[e],
        }),
          (s.cdata = /^<!\[CDATA\[|\]\]>\$/i);
        var t = {
          "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s },
        };
        t["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
        var n = {};
        (n[a] = {
          pattern: RegExp(
            "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
              /__/g,
              function () {
                return a;
              }
            ),
            "i"
          ),
          lookbehind: !0,
          greedy: !0,
          inside: t,
        }),
          Prism.languages.insertBefore("markup", "cdata", n);
      },
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
      value: function (a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            "(^|[\"'\\s])(?:" +
              a +
              ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2\$)/,
                  lookbehind: !0,
                  alias: [e, "language-" + e],
                  inside: Prism.languages[e],
                },
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend("markup", {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml);
  !(function (s) {
    var e =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (s.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp(
          "@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" +
            e.source +
            ")*?(?:;|(?=\\s*\\{))"
        ),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector",
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          "\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
          "i"
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)\$/,
          string: { pattern: RegExp("^" + e.source + "\$"), alias: "url" },
        },
      },
      selector: {
        pattern: RegExp(
          "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
            e.source +
            ")*(?=\\s*\\{)"
        ),
        lookbehind: !0,
      },
      string: { pattern: e, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (s.languages.css.atrule.inside.rest = s.languages.css);
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
  })(Prism);
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|\$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  };
  (Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
      Prism.languages.clike["class-name"],
      {
        pattern:
          /(^|[^\$\w\xA0-\uFFFF])(?!\s)[_\$A-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[\$\w\xA0-\uFFFF]|\$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|\$))|for|from(?=\s*(?:['"]|\$))|function|(?:get|set)(?=\s*(?:[#\[\$\w\xA0-\uFFFF]|\$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        "(^|[^\\w\$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w\$])"
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (Prism.languages.javascript["class-name"][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    Prism.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          "((?:^|[^\$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:\$|[\r\n,.;:})\\]]|//))"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*\$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: Prism.languages.regex,
          },
          "regex-delimiter": /^\/|\/\$/,
          "regex-flags": /^[a-z]+\$/,
        },
      },
      "function-variable": {
        pattern:
          /#?(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function",
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /(^|[^\$\w\xA0-\uFFFF])(?!\s)[_\$a-z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![\$\w\xA0-\uFFFF]))(?:(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    Prism.languages.insertBefore("javascript", "string", {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
      "template-string": {
        pattern:
          /\`(?:\\[\s\S]|\\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\\$\{)[^\\\`])*\`/,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^\`|\`\$/, alias: "string" },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\\$\{|\}\$/,
                alias: "punctuation",
              },
              rest: Prism.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      "string-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
      },
    }),
    Prism.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property",
      },
    }),
    Prism.languages.markup &&
      (Prism.languages.markup.tag.addInlined("script", "javascript"),
      Prism.languages.markup.tag.addAttribute(
        "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
        "javascript"
      )),
    (Prism.languages.js = Prism.languages.javascript);
  !(function (t) {
    var n = t.util.clone(t.languages.javascript),
      e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
    function a(t, n) {
      return (
        (t = t
          .replace(/<S>/g, function () {
            return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
          })
          .replace(/<BRACES>/g, function () {
            return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
          })
          .replace(/<SPREAD>/g, function () {
            return e;
          })),
        RegExp(t, n)
      );
    }
    (e = a(e).source),
      (t.languages.jsx = t.languages.extend("markup", n)),
      (t.languages.jsx.tag.pattern = a(
        "</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:\$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"
      )),
      (t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (t.languages.jsx.tag.inside["attr-value"].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (t.languages.jsx.tag.inside.tag.inside["class-name"] =
        /^[A-Z]\w*(?:\.[A-Z]\w*)*\$/),
      (t.languages.jsx.tag.inside.comment = n.comment),
      t.languages.insertBefore(
        "inside",
        "attr-name",
        { spread: { pattern: a("<SPREAD>"), inside: t.languages.jsx } },
        t.languages.jsx.tag
      ),
      t.languages.insertBefore(
        "inside",
        "special-attr",
        {
          script: {
            pattern: a("=<BRACES>"),
            alias: "language-javascript",
            inside: {
              "script-punctuation": {
                pattern: /^=(?=\{)/,
                alias: "punctuation",
              },
              rest: t.languages.jsx,
            },
          },
        },
        t.languages.jsx.tag
      );
    var s = function (t) {
        return t
          ? "string" == typeof t
            ? t
            : "string" == typeof t.content
            ? t.content
            : t.content.map(s).join("")
          : "";
      },
      g = function (n) {
        for (var e = [], a = 0; a < n.length; a++) {
          var o = n[a],
            i = !1;
          if (
            ("string" != typeof o &&
              ("tag" === o.type && o.content[0] && "tag" === o.content[0].type
                ? "</" === o.content[0].content[0].content
                  ? e.length > 0 &&
                    e[e.length - 1].tagName === s(o.content[0].content[1]) &&
                    e.pop()
                  : "/>" === o.content[o.content.length - 1].content ||
                    e.push({
                      tagName: s(o.content[0].content[1]),
                      openedBraces: 0,
                    })
                : e.length > 0 && "punctuation" === o.type && "{" === o.content
                ? e[e.length - 1].openedBraces++
                : e.length > 0 &&
                  e[e.length - 1].openedBraces > 0 &&
                  "punctuation" === o.type &&
                  "}" === o.content
                ? e[e.length - 1].openedBraces--
                : (i = !0)),
            (i || "string" == typeof o) &&
              e.length > 0 &&
              0 === e[e.length - 1].openedBraces)
          ) {
            var r = s(o);
            a < n.length - 1 &&
              ("string" == typeof n[a + 1] || "plain-text" === n[a + 1].type) &&
              ((r += s(n[a + 1])), n.splice(a + 1, 1)),
              a > 0 &&
                ("string" == typeof n[a - 1] ||
                  "plain-text" === n[a - 1].type) &&
                ((r = s(n[a - 1]) + r), n.splice(a - 1, 1), a--),
              (n[a] = new t.Token("plain-text", r, null, r));
          }
          o.content && "string" != typeof o.content && g(o.content);
        }
      };
    t.hooks.add("after-tokenize", function (t) {
      ("jsx" !== t.language && "tsx" !== t.language) || g(t.tokens);
    });
  })(Prism);
  !(function (e) {
    (e.languages.typescript = e.languages.extend("javascript", {
      "class-name": {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
      e.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_\$a-zA-Z\xA0-\uFFFF]|\$))/,
        /\btype\b(?=\s*(?:[\{*]|\$))/
      ),
      delete e.languages.typescript.parameter,
      delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"],
      (e.languages.typescript["class-name"].inside = s),
      e.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[\$\w\xA0-\uFFFF]+/,
          inside: {
            at: { pattern: /^@/, alias: "operator" },
            function: /^[\s\S]+/,
          },
        },
        "generic-function": {
          pattern:
            /#?(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function:
              /^#?(?!\s)[_\$a-zA-Z\xA0-\uFFFF](?:(?!\s)[\$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: s },
          },
        },
      }),
      (e.languages.ts = e.languages.typescript);
  })(Prism);
  !(function (e) {
    var a = e.util.clone(e.languages.typescript);
    (e.languages.tsx = e.languages.extend("jsx", a)),
      delete e.languages.tsx.parameter,
      delete e.languages.tsx["literal-property"];
    var t = e.languages.tsx.tag;
    (t.pattern = RegExp(
      "(^|[^\\w\$]|(?=</))(?:" + t.pattern.source + ")",
      t.pattern.flags
    )),
      (t.lookbehind = !0);
  })(Prism);
`}</Script>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  'code[class*="language-"],\npre[class*="language-"] {\n  color: white;\n  background: 0 0;\n  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\npre[class*="language-"] {\n  position: relative;\n  overflow: hidden;\n  padding: 1px;\n}\n\npre[class*="language-"]>code {\n  position: relative;\n  z-index: 1;\n  border-left: 10px solid #262626;\n  box-shadow: -1px 0 0 0 #262626, 0 0 0 1px #dfdfdf;\n  background-color: #262626;\n  background-size: 3em 3em;\n  background-origin: content-box;\n  background-attachment: local;\n}\n\ncode[class*="language-"] {\n  max-height: inherit;\n  height: 100%;\n  padding: 0 1em;\n  display: block;\n  overflow: auto;\n}\n\n:not(pre)>code[class*="language-"],\npre[class*="language-"] {\n  background-color: transparent; \n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-bottom: 1em;\n}\n\n:not(pre)>code[class*="language-"] {\n  position: relative;\n  padding: 0.2em;\n  border-radius: 0.3em;\n  color: #c92c2c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: inline;\n  white-space: normal;\n}\n\npre[class*="language-"]:after,\npre[class*="language-"]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  bottom: 0.75em;\n  left: 0.18em;\n  width: 40%;\n  height: 20%;\n  max-height: 13em;\n  box-shadow: 0 13px 8px #979797;\n  -webkit-transform: rotate(-2deg);\n  -moz-transform: rotate(-2deg);\n  -ms-transform: rotate(-2deg);\n  -o-transform: rotate(-2deg);\n  transform: rotate(-2deg);\n}\n\npre[class*="language-"]:after {\n  right: 0.75em;\n  left: auto;\n  -webkit-transform: rotate(2deg);\n  -moz-transform: rotate(2deg);\n  -ms-transform: rotate(2deg);\n  -o-transform: rotate(2deg);\n  transform: rotate(2deg);\n}\n\n./*********************************************************\n* Tokens\n*/\n.namespace {\n\topacity: .7;\n}\n\n.token.doctype .token.doctype-tag {\n\tcolor: #569CD6;\n}\n\n.token.doctype .token.name {\n\tcolor: #9cdcfe;\n}\n\n.token.comment,\n.token.prolog {\n\tcolor: #6a9955;\n}\n\n.token.punctuation,\n.language-html .language-css .token.punctuation,\n.language-html .language-javascript .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.inserted,\n.token.unit {\n\tcolor: #b5cea8;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.deleted {\n\tcolor: #ce9178;\n}\n\n.language-css .token.string.url {\n\ttext-decoration: underline;\n}\n\n.token.operator,\n.token.entity {\n\tcolor: #d4d4d4;\n}\n\n.token.operator.arrow {\n\tcolor: #569CD6;\n}\n\n.token.atrule {\n\tcolor: #ce9178;\n}\n\n.token.atrule .token.rule {\n\tcolor: #c586c0;\n}\n\n.token.atrule .token.url {\n\tcolor: #9cdcfe;\n}\n\n.token.atrule .token.url .token.function {\n\tcolor: #aac6dc;\n}\n\n.token.atrule .token.url .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.keyword {\n\tcolor: #569CD6;\n}\n\n.token.keyword.module,\n.token.keyword.control-flow {\n\tcolor: #c586c0;\n}\n\n.token.function,\n.token.function .token.maybe-class-name {\n\tcolor: #aac6dc;\n}\n\n.token.regex {\n\tcolor: #d16969;\n}\n\n.token.important {\n\tcolor: #569cd6;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.constant {\n\tcolor: #9cdcfe;\n}\n\n.token.class-name,\n.token.maybe-class-name {\n\tcolor: #4ec9b0;\n}\n\n.token.console {\n\tcolor: #9cdcfe;\n}\n\n.token.parameter {\n\tcolor: #9cdcfe;\n}\n\n.token.interpolation {\n\tcolor: #9cdcfe;\n}\n\n.token.punctuation.interpolation-punctuation {\n\tcolor: #569cd6;\n}\n\n.token.boolean {\n\tcolor: #569cd6;\n}\n\n.token.property,\n.token.variable,\n.token.imports .token.maybe-class-name,\n.token.exports .token.maybe-class-name {\n\tcolor: #9cdcfe;\n}\n\n.token.selector {\n\tcolor: #d7ba7d;\n}\n\n.token.escape {\n\tcolor: #d7ba7d;\n}\n\n.token.tag {\n\tcolor: #569cd6;\n}\n\n.token.tag .token.punctuation {\n\tcolor: #808080;\n}\n\n.token.cdata {\n\tcolor: #808080;\n}\n\n.token.attr-name {\n\tcolor: #9cdcfe;\n}\n\n.token.attr-value,\n.token.attr-value .token.punctuation {\n\tcolor: #ce9178;\n}\n\n.token.attr-value .token.punctuation.attr-equals {\n\tcolor: #d4d4d4;\n}\n\n.token.entity {\n\tcolor: #569cd6;\n}\n\n.token.namespace {\n\tcolor: #4ec9b0;\n}\n/*********************************************************\n* Language Specific\n*/\n\npre[class*="language-javascript"],\ncode[class*="language-javascript"],\npre[class*="language-jsx"],\ncode[class*="language-jsx"],\npre[class*="language-typescript"],\ncode[class*="language-typescript"],\npre[class*="language-tsx"],\ncode[class*="language-tsx"] {\n\tcolor: #9cdcfe;\n}\n\npre[class*="language-css"],\ncode[class*="language-css"] {\n\tcolor: #ce9178;\n}\n\npre[class*="language-html"],\ncode[class*="language-html"] {\n\tcolor: #d4d4d4;\n}\n\n.language-regex .token.anchor {\n\tcolor: #aac6dc;\n}\n\n.language-html .token.punctuation {\n\tcolor: #808080;\n}\n/*********************************************************\n* Line highlighting\n*/\npre[class*="language-"] > code[class*="language-"] {\n\tposition: relative;\n\tz-index: 1;\n}\n\n.line-highlight.line-highlight {\n\tbackground: #f7ebc6;\n\tbox-shadow: inset 5px 0 0 #f7d87c;\n\tz-index: 0;\n}',
              }}
            />

            <pre
              style={{
                clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                overflowX: 'hidden',
                overflowY: 'hidden',
              }}
            >
              <code
                className="language-tsx line-numbers"
                style={{ overflowX: 'hidden', overflowY: 'hidden' }}
              >
                {'\n'}
                {'\n'}
                {'         '}export default function App() {'{'}
                {'\n'}
                {'        '}return ({'\n'}
                {'           '}&lt;BrowserRouter&gt;{'\n'}
                {'            '}&lt;Routes&gt;{'\n'}
                {'             '}&lt;Route{'\n'}
                {'               '}path="*"{'\n'}
                {'              '}element={'{'}
                {'\n'}
                {'              '}&lt;&gt;{'\n'}
                {'                '}&lt;Layout /&gt;{'\n'}
                {'                '}&lt;NoPage className="NoPage" /&gt;{'\n'}
                {'              '}&lt;/&gt;{'\n'}
                {'            '}
                {'}'}
                {'\n'}
                {'          '}&gt;&lt;/Route&gt;{'\n'}
                {'          '}&lt;Route{'\n'}
                {'            '}index{'\n'}
                {'            '}element={'{'}
                {'\n'}
                {'              '}&lt;&gt;{'\n'}
                {'                '}&lt;Home /&gt;{'\n'}
                {'                '}&lt;Layout /&gt;{'\n'}
                {'              '}&lt;/&gt;{'\n'}
                {'            '}
                {'}'}
                {'\n'}
                {'          '}/&gt;{'\n'}
                {'          '}&lt;Route{'\n'}
                {'            '}path="pages/"{'\n'}
                {'            '}element={'{'}
                {'\n'}
                {'              '}&lt;&gt;{'\n'}
                {'                '}&lt;Layout /&gt;{'\n'}
                {'                '}&lt;NoPage /&gt;{'\n'}
                {'              '}&lt;/&gt;{'\n'}
                {'            '}
                {'}'}
                {'\n'}
                {'          '}&gt;&lt;/Route&gt;{'\n'}
                {'\n'}
                {'        '}&lt;Route path="pages" element={'{'}&lt;Layout /&gt;
                {'}'}&gt;{'\n'}
                {'          '}&lt;Route path="blogs" element={'{'}&lt;Blogs
                /&gt;{'}'} /&gt;{'\n'}
                {'          '}&lt;Route path="contact" element={'{'}&lt;Contact
                /&gt;{'}'} /&gt;{'\n'}
                {'          '}&lt;Route path="*" element={'{'}&lt;NoPage /&gt;
                {'}'} /&gt;{'\n'}
                {'        '}&lt;/Route&gt;{'\n'}
                {'      '}&lt;/Routes&gt;{'\n'}
                {'    '}&lt;/BrowserRouter&gt;{'\n'}
                {'  '});{'\n'}
                {'}'}
                {'\n'}
                {'\n'}
                {'\n'}
              </code>
            </pre>
          </React.Fragment>
        </div>
      </div>
      <div className="about-me-banner2"></div>
      <div className="about-me-features1">
        <h1 className="about-me-text31">
          <span>What I Offer</span>
          <br></br>
        </h1>
        <div className="about-me-container6">
          <FeatureCard rootClassName="rootClassName1"></FeatureCard>
          <FeatureCard2 rootClassName="feature-card2-root-class-name1"></FeatureCard2>
          <FeatureCard3 rootClassName="feature-card3-root-class-name1"></FeatureCard3>
          <FeatureCard4 rootClassName="feature-card4-root-class-name1"></FeatureCard4>
        </div>
      </div>
      <div className="about-me-banner3"></div>
      <div className="about-me-features2">
        <div className="about-me-features3">
          <div className="about-me-container7">
            <div className="about-me-container8">
              <FeatureCard5 rootClassName="rootClassName5"></FeatureCard5>
              <FeatureCard6></FeatureCard6>
              <FeatureCard7></FeatureCard7>
              <FeatureCard8></FeatureCard8>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxiaW5hcnl8ZW58MHx8fHwxNjkxMDAyMjYzfDA&amp;ixlib=rb-4.0.3&amp;w=500"
              className="about-me-image1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
