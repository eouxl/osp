package kube_views

import (
	"github.com/openspacee/osp/pkg/kube_resource"
	"github.com/openspacee/osp/pkg/router/views"
	"github.com/openspacee/osp/pkg/utils"
	"github.com/openspacee/ospagent/pkg/utils/code"
	"net/http"
)

type Event struct {
	Views []*views.View
	*kube_resource.KubeResources
}

func NewEvent(kr *kube_resource.KubeResources) *Event {
	event := &Event{
		KubeResources: kr,
	}
	vs := []*views.View{
		views.NewView(http.MethodGet, "/:cluster", event.list),
	}
	event.Views = vs
	return event
}

func (e *Event) list(c *views.Context) *utils.Response {
	var ser EventListSerializers
	if err := c.ShouldBindQuery(&ser); err != nil {
		return &utils.Response{Code: code.ParamsError, Msg: err.Error()}
	}
	reqParams := map[string]interface{}{}
	if ser.Namespace != "" {
		reqParams["namespace"] = ser.Namespace
	}
	if ser.Name != "" {
		reqParams["name"] = ser.Name
	}
	if ser.UID != "" {
		reqParams["uid"] = ser.UID
	}
	if ser.Kind != "" {
		reqParams["kind"] = ser.Kind
	}
	return e.Event.List(c.Param("cluster"), reqParams)
}
