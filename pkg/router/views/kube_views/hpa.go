package kube_views

import (
	"github.com/openspacee/osp/pkg/kube_resource"
	"github.com/openspacee/osp/pkg/router/views"
	"github.com/openspacee/osp/pkg/utils"
	"github.com/openspacee/ospagent/pkg/utils/code"
	"net/http"
)

type Hpa struct {
	Views []*views.View
	*kube_resource.KubeResources
}

func NewHpa(kr *kube_resource.KubeResources) *Hpa {
	h := &Hpa{
		KubeResources: kr,
	}
	vs := []*views.View{
		views.NewView(http.MethodGet, "/:cluster/:namespace/:name", h.get),
		views.NewView(http.MethodGet, "/:cluster", h.list),
		views.NewView(http.MethodPost, "/:cluster/delete", h.delete),
		views.NewView(http.MethodPost, "/:cluster/update/:namespace/:name", h.updateYaml),
	}
	h.Views = vs
	return h
}

func (h *Hpa) list(c *views.Context) *utils.Response {
	var ser ListSerializers
	if err := c.ShouldBindQuery(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	reqParams := map[string]interface{}{
		"name":      ser.Name,
		"namespace": ser.Namespace,
	}
	return h.Hpa.List(c.Param("cluster"), reqParams)
}

func (h *Hpa) get(c *views.Context) *utils.Response {
	var ser GetSerializers
	if err := c.ShouldBindQuery(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	reqParams := map[string]interface{}{
		"name":      c.Param("name"),
		"namespace": c.Param("namespace"),
		"output":    ser.Output,
	}
	return h.Hpa.Get(c.Param("cluster"), reqParams)
}

func (h *Hpa) delete(c *views.Context) *utils.Response {
	var ser DeleteSerializers
	if err := c.ShouldBind(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	return h.Hpa.Delete(c.Param("cluster"), ser)
}

func (h *Hpa) updateYaml(c *views.Context) *utils.Response {
	var ser UpdateSerializers
	if err := c.ShouldBind(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	reqParams := map[string]interface{}{
		"name":      c.Param("name"),
		"namespace": c.Param("namespace"),
		"yaml":      ser.Yaml,
	}
	return h.Hpa.UpdateYaml(c.Param("cluster"), reqParams)
}
