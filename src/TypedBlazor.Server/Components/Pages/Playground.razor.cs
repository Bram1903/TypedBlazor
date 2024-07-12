using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using TypedBlazor.Server.Constants;

namespace TypedBlazor.Server.Components.Pages;

public class PlaygroundComponent : ComponentBase, IAsyncDisposable
{
    [Inject] private IJSRuntime JsRuntime { get; set; } = null!;
    
    private IJSObjectReference? _module;
    private readonly CancellationTokenSource _cts = new();
    
    protected override async Task OnInitializedAsync()
    {
        _module = await JsRuntime.InvokeAsync<IJSObjectReference>(JsInteropConstants.ImportIdentifier, _cts.Token, JsInteropConstants.CanvasModuleName);
        await _module.InvokeVoidAsync(JsInteropConstants.InitialiseDrawer, _cts.Token);
    }

    public async ValueTask DisposeAsync()
    {
        await _cts.CancelAsync();
    }
}