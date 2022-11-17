using HotChocolate.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddCors()
    .AddGraphQLServer()
    .AddQueryType<Query>();

var app = builder.Build();
app.MapGraphQL();
app.UseRouting();
app.UseEndpoints(endpoints =>
{    
    endpoints.MapBananaCakePop("/graphql/ui").WithOptions(new GraphQLToolOptions
    {
        UseBrowserUrlAsGraphQLEndpoint = true
    });
});

app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.Run();
