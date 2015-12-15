package hello

import (
	"io/ioutil"
	"net/http"
)

func init() {
	content, err := ioutil.ReadFile("index.html")
	if err != nil {
		panic(err)
	}
	HTML = content
	http.HandleFunc("/", root)
}

var (
	HTML []byte
)

func root(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	w.Write(HTML)
}
