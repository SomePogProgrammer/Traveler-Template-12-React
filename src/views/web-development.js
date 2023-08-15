import React from 'react'
import Script from 'dangerous-html/react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './web-development.css'

const WebDevelopment = (props) => {
  return (
    <div className="web-development-container">
      <Helmet>
        <title>WebDevelopment - Traveler (Template 12)</title>
        <meta
          property="og:title"
          content="WebDevelopment - Traveler (Template 12)"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="web-development-features">
        <h1 className="web-development-text">
          <span>What I Offer</span>
          <br></br>
        </h1>
        <div className="web-development-container01">
          <div className="web-development-container02">
            <svg viewBox="0 0 1024 1024" className="web-development-icon">
              <path d="M146.286 804.571h731.429v-438.857h-731.429v438.857zM1024 164.571v694.857c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-694.857c0-50.286 41.143-91.429 91.429-91.429h841.143c50.286 0 91.429 41.143 91.429 91.429z"></path>
            </svg>
            <h1 className="web-development-text03">
              <span>Websites</span>
              <br></br>
            </h1>
            <span className="web-development-text06">
              <span>
                I offer a sleek and modern design for simple and complex
                websites.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                As a Web Developer and UI/UX Designer, I realize how animations
                go a long way in making your website interactive.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                My designs will catch the eyes of your users, don&apos;t settle
                for static websites, when you can immerse your users with
                interactive elements!
              </span>
            </span>
          </div>
          <div className="web-development-container03">
            <svg viewBox="0 0 1024 1024" className="web-development-icon02">
              <path d="M146.286 804.571h731.429v-438.857h-731.429v438.857zM1024 164.571v694.857c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-694.857c0-50.286 41.143-91.429 91.429-91.429h841.143c50.286 0 91.429 41.143 91.429 91.429z"></path>
            </svg>
            <svg
              viewBox="0 0 1170.2857142857142 1024"
              className="web-development-icon04"
            >
              <path d="M585.143 870.286c-14.857 0-94.857-80-94.857-95.429 0-28 73.143-43.429 94.857-43.429s94.857 15.429 94.857 43.429c0 15.429-80 95.429-94.857 95.429zM739.429 715.429c-8 0-70.286-57.143-154.286-57.143-84.571 0-145.714 57.143-154.286 57.143-13.714 0-96.571-82.286-96.571-96 0-5.143 2.286-9.714 5.714-13.143 61.143-60.571 160.571-94.286 245.143-94.286s184 33.714 245.143 94.286c3.429 3.429 5.714 8 5.714 13.143 0 13.714-82.857 96-96.571 96zM895.429 560c-4.571 0-9.714-2.286-13.143-4.571-94.286-73.143-173.714-116.571-297.143-116.571-172.571 0-304 121.143-310.286 121.143-13.143 0-95.429-82.286-95.429-96 0-4.571 2.286-9.143 5.714-12.571 102.286-102.286 256.571-158.857 400-158.857s297.714 56.571 400 158.857c3.429 3.429 5.714 8 5.714 12.571 0 13.714-82.286 96-95.429 96zM1050.286 405.143c-4.571 0-9.143-2.286-12.571-5.143-132-116-274.286-180.571-452.571-180.571s-320.571 64.571-452.571 180.571c-3.429 2.857-8 5.143-12.571 5.143-13.143 0-96-82.286-96-96 0-5.143 2.286-9.714 5.714-13.143 144.571-143.429 353.143-222.857 555.429-222.857s410.857 79.429 555.429 222.857c3.429 3.429 5.714 8 5.714 13.143 0 13.714-82.857 96-96 96z"></path>
            </svg>
            <h1 className="web-development-text13">Front-End APIs</h1>
            <span className="web-development-text14">
              Want to add more functionality to your website, maybe a video
              player, a system that can connect to your Google Calendar, or
              something to communicate to a database or another server? Maybe
              even bring the functionality of your favorite applications into
              your website.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="web-development-container04">
            <svg viewBox="0 0 1024 1024" className="web-development-icon06">
              <path d="M512 0c-282.77 0-512 71.634-512 160v128c0 88.366 229.23 160 512 160s512-71.634 512-160v-128c0-88.366-229.23-160-512-160z"></path>
              <path d="M512 544c-282.77 0-512-71.634-512-160v192c0 88.366 229.23 160 512 160s512-71.634 512-160v-192c0 88.366-229.23 160-512 160z"></path>
              <path d="M512 832c-282.77 0-512-71.634-512-160v192c0 88.366 229.23 160 512 160s512-71.634 512-160v-192c0 88.366-229.23 160-512 160z"></path>
            </svg>
            <h1 className="web-development-text15">
              <span>Databases</span>
              <br></br>
            </h1>
            <div className="web-development-container05">
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
                      'code[class*="language-"],\npre[class*="language-"] {\n  //color: white;\n  background: 0 0;\n  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\npre[class*="language-"] {\n  position: relative;\n  overflow: hidden;\n  padding: 1px;\n}\n\npre[class*="language-"]>code {\n  position: relative;\n  z-index: 1;\n  border-left: 10px solid #262626;\n  background-color: #262626;\n  background-size: 3em 3em;\n  background-origin: content-box;\n  background-attachment: local;\n}\n\ncode[class*="language-"] {\n  max-height: inherit;\n  height: 100%;\n  padding: 0 1em;\n  display: block;\n  overflow: auto;\n}\n\n:not(pre)>code[class*="language-"],\npre[class*="language-"] {\n  background-color: transparent; \n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-bottom: 1em;\n}\n\n:not(pre)>code[class*="language-"] {\n  position: relative;\n  padding: 0.2em;\n  border-radius: 0.3em;\n  color: #c92c2c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: inline;\n  white-space: normal;\n}\n\npre[class*="language-"]:after,\npre[class*="language-"]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  bottom: 0.75em;\n  left: 0.18em;\n  width: 40%;\n  height: 20%;\n  max-height: 13em;\n  box-shadow: 0 13px 8px #979797;\n  -webkit-transform: rotate(-2deg);\n  -moz-transform: rotate(-2deg);\n  -ms-transform: rotate(-2deg);\n  -o-transform: rotate(-2deg);\n  transform: rotate(-2deg);\n}\n\npre[class*="language-"]:after {\n  right: 0.75em;\n  left: auto;\n  -webkit-transform: rotate(2deg);\n  -moz-transform: rotate(2deg);\n  -ms-transform: rotate(2deg);\n  -o-transform: rotate(2deg);\n  transform: rotate(2deg);\n}\n\n./*********************************************************\n* Tokens\n*/\n.namespace {\n\topacity: .7;\n}\n\n.token.doctype .token.doctype-tag {\n\tcolor: #569CD6;\n}\n\n.token.doctype .token.name {\n\tcolor: #9cdcfe;\n}\n\n.token.comment,\n.token.prolog {\n\tcolor: #6a9955;\n}\n\n.token.punctuation,\n.language-html .language-css .token.punctuation,\n.language-html .language-javascript .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.inserted,\n.token.unit {\n\tcolor: #b5cea8;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.deleted {\n\tcolor: #ce9178;\n}\n\n.language-css .token.string.url {\n\ttext-decoration: underline;\n}\n\n.token.operator,\n.token.entity {\n\tcolor: #d4d4d4;\n}\n\n.token.operator.arrow {\n\tcolor: #569CD6;\n}\n\n.token.atrule {\n\tcolor: #ce9178;\n}\n\n.token.atrule .token.rule {\n\tcolor: #c586c0;\n}\n\n.token.atrule .token.url {\n\tcolor: #9cdcfe;\n}\n\n.token.atrule .token.url .token.function {\n\tcolor: #aac6dc;\n}\n\n.token.atrule .token.url .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.keyword {\n\tcolor: #569CD6;\n}\n\n.token.keyword.module,\n.token.keyword.control-flow {\n\tcolor: #c586c0;\n}\n\n.token.function,\n.token.function .token.maybe-class-name {\n\tcolor: #aac6dc;\n}\n\n.token.regex {\n\tcolor: #d16969;\n}\n\n.token.important {\n\tcolor: #569cd6;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.constant {\n\tcolor: #9cdcfe;\n}\n\n.token.class-name,\n.token.maybe-class-name {\n\tcolor: #4ec9b0;\n}\n\n.token.console {\n\tcolor: #9cdcfe;\n}\n\n.token.parameter {\n\tcolor: #9cdcfe;\n}\n\n.token.interpolation {\n\tcolor: #9cdcfe;\n}\n\n.token.punctuation.interpolation-punctuation {\n\tcolor: #569cd6;\n}\n\n.token.boolean {\n\tcolor: #569cd6;\n}\n\n.token.property,\n.token.variable,\n.token.imports .token.maybe-class-name,\n.token.exports .token.maybe-class-name {\n\tcolor: #9cdcfe;\n}\n\n.token.selector {\n\tcolor: #d7ba7d;\n}\n\n.token.escape {\n\tcolor: #d7ba7d;\n}\n\n.token.tag {\n\tcolor: #569cd6;\n}\n\n.token.tag .token.punctuation {\n\tcolor: #808080;\n}\n\n.token.cdata {\n\tcolor: #808080;\n}\n\n.token.attr-name {\n\tcolor: #9cdcfe;\n}\n\n.token.attr-value,\n.token.attr-value .token.punctuation {\n\tcolor: #ce9178;\n}\n\n.token.attr-value .token.punctuation.attr-equals {\n\tcolor: #d4d4d4;\n}\n\n.token.entity {\n\tcolor: #569cd6;\n}\n\n.token.namespace {\n\tcolor: #4ec9b0;\n}\n/*********************************************************\n* Language Specific\n*/\n\npre[class*="language-javascript"],\ncode[class*="language-javascript"],\npre[class*="language-jsx"],\ncode[class*="language-jsx"],\npre[class*="language-typescript"],\ncode[class*="language-typescript"],\npre[class*="language-tsx"],\ncode[class*="language-tsx"] {\n\tcolor: #9cdcfe;\n}\n\npre[class*="language-css"],\ncode[class*="language-css"] {\n\tcolor: #ce9178;\n}\n\npre[class*="language-html"],\ncode[class*="language-html"] {\n\tcolor: #d4d4d4;\n}\n\n.language-regex .token.anchor {\n\tcolor: #aac6dc;\n}\n\n.language-html .token.punctuation {\n\tcolor: #808080;\n}\n/*********************************************************\n* Line highlighting\n*/\npre[class*="language-"] > code[class*="language-"] {\n\tposition: relative;\n\tz-index: 1;\n}\n\n.line-highlight.line-highlight {\n\tbackground: #f7ebc6;\n\tbox-shadow: inset 5px 0 0 #f7d87c;\n\tz-index: 0;\n}',
                  }}
                />

                <pre
                  style={{
                    '//clipPath': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    background: 'transparent',
                  }}
                >
                  <code
                    className="language-tsx"
                    style={{
                      overflowX: 'hidden',
                      overflowY: 'hidden',
                      userSelect: 'none',
                      width: '100%',
                      heigh: '100%',
                    }}
                  >
                    {'\n'} const myDatabaseURL = "localhost:8080";{'\n'}
                    {'\n'} const getData = await fetch(myDatabaseURL, {'{'}
                    {'\n'}
                    {'   '}method: "GET"{'\n'} {'}'}){'\n'} const data = await
                    getData.json(){'\n'}
                    {'  '}
                    {'\n'}
                  </code>
                </pre>
              </React.Fragment>
            </div>
            <span className="web-development-text18">
              <span>
                We offer database apis, I won&apos;t provide the database, in
                all the websites that use databases, I will be using a local
                database on my computer, as proof of concept, once bought you
                must provide the database, or I can instruct you on how to
                create one.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="web-development-container06">
            <svg viewBox="0 0 1024 1024" className="web-development-icon10">
              <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
              <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
            </svg>
            <h1 className="web-development-text22">
              <span>Embeds</span>
              <br></br>
            </h1>
            <span className="web-development-text25">
              <span>
                Make your website even more interactive, with embedded services,
                widgets, or embedded text/code! 
              </span>
              <br></br>
              <br></br>
              <span>Example, shows on hover!</span>
              <br></br>
            </span>
            <div className="web-development-container07">
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
                      'code[class*="language-"],\npre[class*="language-"] {\n  //color: white;\n  background: 0 0;\n  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\npre[class*="language-"] {\n  position: relative;\n  overflow: hidden;\n  padding: 1px;\n}\n\npre[class*="language-"]>code {\n  position: relative;\n  z-index: 1;\n  border-left: 10px solid #262626;\n  background-color: #262626;\n  background-size: 3em 3em;\n  background-origin: content-box;\n  background-attachment: local;\n}\n\ncode[class*="language-"] {\n  max-height: inherit;\n  height: 100%;\n  padding: 0 1em;\n  display: block;\n  overflow: auto;\n}\n\n:not(pre)>code[class*="language-"],\npre[class*="language-"] {\n  background-color: transparent; \n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-bottom: 1em;\n}\n\n:not(pre)>code[class*="language-"] {\n  position: relative;\n  padding: 0.2em;\n  border-radius: 0.3em;\n  color: #c92c2c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: inline;\n  white-space: normal;\n}\n\npre[class*="language-"]:after,\npre[class*="language-"]:before {\n  content: "";\n  display: block;\n  position: absolute;\n  bottom: 0.75em;\n  left: 0.18em;\n  width: 40%;\n  height: 20%;\n  max-height: 13em;\n  box-shadow: 0 13px 8px #979797;\n  -webkit-transform: rotate(-2deg);\n  -moz-transform: rotate(-2deg);\n  -ms-transform: rotate(-2deg);\n  -o-transform: rotate(-2deg);\n  transform: rotate(-2deg);\n}\n\npre[class*="language-"]:after {\n  right: 0.75em;\n  left: auto;\n  -webkit-transform: rotate(2deg);\n  -moz-transform: rotate(2deg);\n  -ms-transform: rotate(2deg);\n  -o-transform: rotate(2deg);\n  transform: rotate(2deg);\n}\n\n./*********************************************************\n* Tokens\n*/\n.namespace {\n\topacity: .7;\n}\n\n.token.doctype .token.doctype-tag {\n\tcolor: #569CD6;\n}\n\n.token.doctype .token.name {\n\tcolor: #9cdcfe;\n}\n\n.token.comment,\n.token.prolog {\n\tcolor: #6a9955;\n}\n\n.token.punctuation,\n.language-html .language-css .token.punctuation,\n.language-html .language-javascript .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.inserted,\n.token.unit {\n\tcolor: #b5cea8;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.deleted {\n\tcolor: #ce9178;\n}\n\n.language-css .token.string.url {\n\ttext-decoration: underline;\n}\n\n.token.operator,\n.token.entity {\n\tcolor: #d4d4d4;\n}\n\n.token.operator.arrow {\n\tcolor: #569CD6;\n}\n\n.token.atrule {\n\tcolor: #ce9178;\n}\n\n.token.atrule .token.rule {\n\tcolor: #c586c0;\n}\n\n.token.atrule .token.url {\n\tcolor: #9cdcfe;\n}\n\n.token.atrule .token.url .token.function {\n\tcolor: #aac6dc;\n}\n\n.token.atrule .token.url .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.keyword {\n\tcolor: #569CD6;\n}\n\n.token.keyword.module,\n.token.keyword.control-flow {\n\tcolor: #c586c0;\n}\n\n.token.function,\n.token.function .token.maybe-class-name {\n\tcolor: #aac6dc;\n}\n\n.token.regex {\n\tcolor: #d16969;\n}\n\n.token.important {\n\tcolor: #569cd6;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.constant {\n\tcolor: #9cdcfe;\n}\n\n.token.class-name,\n.token.maybe-class-name {\n\tcolor: #4ec9b0;\n}\n\n.token.console {\n\tcolor: #9cdcfe;\n}\n\n.token.parameter {\n\tcolor: #9cdcfe;\n}\n\n.token.interpolation {\n\tcolor: #9cdcfe;\n}\n\n.token.punctuation.interpolation-punctuation {\n\tcolor: #569cd6;\n}\n\n.token.boolean {\n\tcolor: #569cd6;\n}\n\n.token.property,\n.token.variable,\n.token.imports .token.maybe-class-name,\n.token.exports .token.maybe-class-name {\n\tcolor: #9cdcfe;\n}\n\n.token.selector {\n\tcolor: #d7ba7d;\n}\n\n.token.escape {\n\tcolor: #d7ba7d;\n}\n\n.token.tag {\n\tcolor: #569cd6;\n}\n\n.token.tag .token.punctuation {\n\tcolor: #808080;\n}\n\n.token.cdata {\n\tcolor: #808080;\n}\n\n.token.attr-name {\n\tcolor: #9cdcfe;\n}\n\n.token.attr-value,\n.token.attr-value .token.punctuation {\n\tcolor: #ce9178;\n}\n\n.token.attr-value .token.punctuation.attr-equals {\n\tcolor: #d4d4d4;\n}\n\n.token.entity {\n\tcolor: #569cd6;\n}\n\n.token.namespace {\n\tcolor: #4ec9b0;\n}\n/*********************************************************\n* Language Specific\n*/\n\npre[class*="language-javascript"],\ncode[class*="language-javascript"],\npre[class*="language-jsx"],\ncode[class*="language-jsx"],\npre[class*="language-typescript"],\ncode[class*="language-typescript"],\npre[class*="language-tsx"],\ncode[class*="language-tsx"] {\n\tcolor: #9cdcfe;\n}\n\npre[class*="language-css"],\ncode[class*="language-css"] {\n\tcolor: #ce9178;\n}\n\npre[class*="language-html"],\ncode[class*="language-html"] {\n\tcolor: #d4d4d4;\n}\n\n.language-regex .token.anchor {\n\tcolor: #aac6dc;\n}\n\n.language-html .token.punctuation {\n\tcolor: #808080;\n}\n/*********************************************************\n* Line highlighting\n*/\npre[class*="language-"] > code[class*="language-"] {\n\tposition: relative;\n\tz-index: 1;\n}\n\n.line-highlight.line-highlight {\n\tbackground: #f7ebc6;\n\tbox-shadow: inset 5px 0 0 #f7d87c;\n\tz-index: 0;\n}',
                  }}
                />

                <pre
                  style={{
                    '//clipPath': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    background: 'transparent',
                  }}
                >
                  <code
                    className="language-tsx"
                    style={{
                      overflowX: 'hidden',
                      overflowY: 'hidden',
                      borderRadius: '12px',
                      userSelect: 'none',
                    }}
                  >
                    {'\n'} import ExampleEmbed from
                    "/Components/ExampleEmbed.js"{'\n'} export default function
                    App() {'{'}
                    {'\n'}
                    {'  '}return ({'\n'}
                    {'   '}&lt;ExampleEmbed&gt; {'\n'}
                    {'    '}This code is an Embed!{'\n'}
                    {'   '}&lt;/ExampleEmbed&gt;{'\n'} ){'\n'} {'}'}
                    {'\n'}
                  </code>
                </pre>
              </React.Fragment>
            </div>
          </div>
          <div className="web-development-container08">
            <svg
              viewBox="0 0 1024.5851428571427 1024"
              className="web-development-icon13"
            >
              <path d="M507.429 676.571l66.286-66.286-86.857-86.857-66.286 66.286v32h54.857v54.857h32zM758.857 265.143c-5.143-5.143-13.714-4.571-18.857 0.571l-200 200c-5.143 5.143-5.714 13.714-0.571 18.857s13.714 4.571 18.857-0.571l200-200c5.143-5.143 5.714-13.714 0.571-18.857zM804.571 604.571v108.571c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c22.857 0 45.714 4.571 66.857 14.286 5.143 2.286 9.143 7.429 10.286 13.143 1.143 6.286-0.571 12-5.143 16.571l-28 28c-5.143 5.143-12 6.857-18.286 4.571-8.571-2.286-17.143-3.429-25.714-3.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-72c0-4.571 1.714-9.143 5.143-12.571l36.571-36.571c5.714-5.714 13.143-6.857 20-4s11.429 9.143 11.429 16.571zM749.714 182.857l164.571 164.571-384 384h-164.571v-164.571zM1003.429 258.286l-52.571 52.571-164.571-164.571 52.571-52.571c21.143-21.143 56.571-21.143 77.714 0l86.857 86.857c21.143 21.143 21.143 56.571 0 77.714z"></path>
            </svg>
            <h1 className="web-development-text31">Response Forms</h1>
            <span className="web-development-text32">
              <span>
                Looking for a way to gather feedback, or to have your users
                apply for a job, or send you a message?
              </span>
              <br></br>
              <span>
                Well then a response form is just what you need, it&apos;s a
                normal form, but programmed to send you the response, via email,
                discord, or social platforms that allow webhooks!
              </span>
              <br></br>
            </span>
          </div>
          <div className="web-development-container09">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="web-development-icon15"
            >
              <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
            </svg>
            <h1 className="web-development-text37">Logins</h1>
            <span className="web-development-text38">
              <span>
                I can create fully customizable login pages, and an account
                management system, to further the features of your website, and
                allow users to get the most out of your website.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopment
